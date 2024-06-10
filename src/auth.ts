import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/db"
import bcrypt from "bcryptjs"
import type { AdapterUser } from "next-auth/adapters"

// next-auth.d.ts
import { DefaultSession } from "next-auth"
import { NextRequest } from "next/server"
import { decode } from "next-auth/jwt"
import { GetServerSidePropsContext, NextApiRequest } from "next"

declare module "next-auth" {
    interface Session {
        user?: {
            id: string
        } & DefaultSession["user"]
    }
}

const credentialProvider = CredentialsProvider({
    name: 'Credentials',
    credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
    },

    async authorize(credentials, req) {

        if (!credentials) {
            return null
        }

        const { email, password } = credentials

        const user = await prisma.user.findUnique({
            where: { email }
        })


        if (user && user.password && bcrypt.compareSync(password, user.password)) {
            return user
        } else {
            return null
        }
    }
})

export type Session = {
    user: AdapterUser,
    expires: string,
}

export default NextAuth({
    providers: [
        credentialProvider
    ],
    pages: {
        signIn: '/signin',
    },
    callbacks: {
        async session({ session, token, user }) {
            if (session.user && token.sub) {
                session.user.id = token.sub
            }
            return session
        }
    },
    session: {
        strategy: "jwt"
    }
})


export async function decodeSession(req: NextApiRequest | GetServerSidePropsContext["req"]) {
    if(!process.env.NEXTAUTH_SECRET) {
        console.warn('Missing NEXTAUTH_SECRET env variable')
        return null
    }
    return await decode({
        token: req.cookies['next-auth.session-token'],
        secret: process.env.NEXTAUTH_SECRET
    })
}