import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/../prisma/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const count = await prisma.user.count()
    return res.send({
        count: count,
        hello: 'world'
    })
}