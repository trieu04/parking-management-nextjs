import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/../prisma/db"
import { hash } from "crypto"

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

        const email = credentials.email
        const passwordHash = hash('SHA256', credentials.password, "base64")
        const user = await prisma.user.findFirst({
            where: {
                passwordHash: passwordHash,
                email: email
            }
        })

        if (user === null) {
            return null
        }

        return user
    }
})

export default NextAuth({
    providers: [
        credentialProvider
    ],
    pages: {
        signIn: '/signin',
    }
})