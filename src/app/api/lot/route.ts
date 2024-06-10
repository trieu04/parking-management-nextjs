import { decodeSession } from "@/auth"
import { NextResponse as Res } from "next/server"
import { cookies } from 'next/headers'
import { decode } from "next-auth/jwt"
import prisma from "@/db"
import Joi from "joi"

async function decodeToken() {
    const cookieStore = cookies()
    const sessionToken = cookieStore.get('next-auth.session-token')?.value

    if (typeof sessionToken !== 'string') {
        return null
    }
    return await decode({
        token: sessionToken,
        secret: process.env.NEXTAUTH_SECRET || ''
    })

}

export async function GET(req: Request) {
    const token = await decodeToken()
    if (!(token && token.sub)) {
        return Res.json({ message: 'Unauthorized' }, { status: 401 })
    }
    const userId = token.sub

    try {
        const parkingLots = await prisma.$queryRaw`
            SELECT * FROM
                (SELECT * FROM ParkingLotManager WHERE userId = ${userId}) AS PLM
                JOIN ParkingLot ON PLM.parkingLotId = ParkingLot.id
        `
        return Res.json({ data: parkingLots }, { status: 200 })
    }
    catch (error) {
        console.error(error)
        return Res.json({ message: 'Internal server error' }, { status: 500 })
    }
}
const createLotSchema = Joi.object({
    name: Joi.string().required().label('Name'),
    location: Joi.string().label('Location'),
    currency: Joi.string().required().label('Currency'),
    bicycleMiniumPrice: Joi.number().default(0).label('Bicycle Minium Price'),
    bicyclePriceHourly: Joi.number().default(0).label('Bicycle Price Hourly'),
    motorbikeMiniumPrice: Joi.number().default(0).label('Motorbike Minium Price'),
    motorbikePriceHourly: Joi.number().default(0).label('Motorbike Price Hourly'),
    carMiniumPrice: Joi.number().default(0).label('Car Minium Price'),
    carPriceHourly: Joi.number().default(0).label('Car Price Hourly'),
    zoneName: Joi.string().required().label('Zone Name'),
    bicycleSpace: Joi.number().default(0).label('Bicycle Space'),
    motorbikeSpace: Joi.number().default(0).label('Motorbike Space'),
    carSpace: Joi.number().default(0).label('Car Space')
})

export async function POST(req: Request) {

    const token = await decodeToken()
    if (!(token && token.sub)) {
        return Res.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const userId = token.sub

    const postData = await req.json()

    const { error, value } = createLotSchema.validate(postData)
    if (error) {
        return Res.json({ message: error.details[0].message }, { status: 400 })
    }
    try {
        const parkingLot = await prisma.parkingLot.create({
            data: {
                name: value.name,
                location: value.location,
                currency: value.currency,
                bicycleMiniumPrice: value.bicycleMiniumPrice,
                bicyclePriceHourly: value.bicyclePriceHourly,
                motorbikeMiniumPrice: value.motorbikeMiniumPrice,
                motorbikePriceHourly: value.motorbikePriceHourly,
                carMiniumPrice: value.carMiniumPrice,
                carPriceHourly: value.carPriceHourly
            }
        })

        await prisma.parkingLotManager.create({
            data: {
                userId: userId,
                parkingLotId: parkingLot.id,
                role: 'owner'
            }
        })

        return Res.json({
            success: true,
            data: parkingLot
        }, {
            status: 201
        })
    }
    catch (error) {
        return Res.json({ message: 'Internal server error' }, { status: 500 })
    }
}