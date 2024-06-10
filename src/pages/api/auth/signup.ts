// pages/api/signup.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import Joi from 'joi'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const signupSchema = Joi.object({
  email: Joi.string().email().required().label('Email'),
  password: Joi.string().min(8).required().label('Password'),
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, password } = req.body
  console.log(req.body)

  const { error } = signupSchema.validate({ email, password })
  if (error) {
    return res.status(400).json({ message: error.details[0].message })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try {

    const emailExist = await prisma.user.findFirst({
      where: {
        email,
      }
    })

    if (emailExist) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Email already exists',
        code: 'email_already_exists'
      })
    }

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    })
    return res.status(201).json({ message: 'User created', user })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}