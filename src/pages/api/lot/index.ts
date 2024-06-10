import { NextApiRequest, NextApiResponse } from 'next'
import _post from './_post'




export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        return _post(req, res)
    }
    return res.status(405).json({ message: 'Method not allowed' })
}