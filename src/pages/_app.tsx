import { NextPage } from "next/types"
import { SessionProvider } from "next-auth/react"
import { AppProps } from "next/app"
import HomeLayout from "@/components/layout/dashboard/dashboard.layout"
import LotLayout from "@/components/layout/parking-lot/lot.layout"
import AuthLayout from "@/components/layout/auth/auth.layout"

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    layoutName: "dashboard" | "lot" | "auth"
}

type AppPropsWithLayout = AppProps & {
    Component: PageWithLayout
}

export default function App({
    Component, pageProps: { session, ...pageProps }
}: AppPropsWithLayout) {
    
    const children = <Component {...pageProps} />
    const renderLayout = () => {
        switch (Component.layoutName) {
            case "dashboard":
                return <HomeLayout>{children}</HomeLayout>
            case "lot":
                return <LotLayout>{children}</LotLayout>
            case "auth":
                return <AuthLayout>{children}</AuthLayout>
            default:
                return children
        }
    }

    return (
        <SessionProvider session={session}>
            {renderLayout()}
        </SessionProvider>
    )
}