import { NextApiRequest, NextApiResponse } from 'next'
import { decodeSession } from '@/auth'
import Joi from 'joi'
import prisma from '@/db'


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

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const token = await decodeSession(req)
    if (!(token && token.sub)) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    const userId = token.sub

    const { error, value } = createLotSchema.validate(req.body)
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
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

        return res.status(201).json({
            success: true,
            data: parkingLot
        })
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' })
    }

}