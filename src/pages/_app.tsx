import { NextPage } from "next/types"
import { SessionProvider } from "next-auth/react"
import { AppProps } from "next/app"
import HomeLayout from "@/components/layout/home/home.layout"
import LotLayout from "@/components/layout/parking-lot/lot.layout"

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    layoutName: "home" | "lot"
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
            case "home":
                return <HomeLayout>{children}</HomeLayout>
            case "lot":
                return <LotLayout>{children}</LotLayout>
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