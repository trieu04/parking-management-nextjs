import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeRegistry from "./ThemeRegistry"
import SessionProvider from "@/components/SessionProvider"
import { CssVarsProvider } from "@mui/joy/styles"
import { CssBaseline } from "@mui/joy"
import { getServerSession } from "next-auth"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Parking Management",
    description: "A Parking Management App",
}

export default async function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession()
    return (
        <html lang="en">
            <SessionProvider session={session}>
                <body className={inter.className}>
                    <ThemeRegistry options={{ key: 'joy' }}>
                        <CssVarsProvider disableTransitionOnChange>
                            <CssBaseline />
                            {children}
                        </CssVarsProvider>
                    </ThemeRegistry>
                </body>
            </SessionProvider>
        </html>
    )
}

