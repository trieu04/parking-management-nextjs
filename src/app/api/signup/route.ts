// pages/api/signup.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import Joi from 'joi'
import bcrypt from 'bcryptjs'
import { NextResponse as Res } from 'next/server'

const prisma = new PrismaClient()

const signupSchema = Joi.object({
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().min(8).required().label('Password'),
})

export async function POST(req: Request) {


    const { email, password } = await req.json()
    console.log(req.body)

    const { error } = signupSchema.validate({ email, password })
    if (error) {
        return Res.json({ message: error.details[0].message }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    try {

        const emailExist = await prisma.user.findFirst({
            where: {
                email,
            }
        })

        if (emailExist) {
            return Res.json({
                error: 'Bad Request',
                message: 'Email already exists',
                code: 'email_already_exists'
            }, {
                status: 400
            })
        }

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        })
        return Res.json({ message: 'User created', user }, { status: 201 })
    } catch (error) {
        console.error(error)
        return Res.json({ message: 'Internal server error' }, { status: 500 })
    }
}