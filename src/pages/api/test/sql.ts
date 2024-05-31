import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../../prisma/db"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const result = await prisma.user.findMany()
    
    return res.send(result)
}