import AppLayout, { AppLayoutPage } from "@/components/layout/AppLayout"
import { NextPage } from "next/types"
import { SessionProvider } from "next-auth/react"
import { AppProps } from "next/app"

type DefaultPage = NextPage & {
    layoutName?: never
}
type AppPropsWithLayout = AppProps & {
    Component: (DefaultPage | AppLayoutPage)
}

export default function App({
    Component, pageProps: { session, ...pageProps }
}: AppPropsWithLayout) {

    const children = <Component {...pageProps} />
    const renderLayout = () => {
        switch (Component.layoutName) {
            case "app":
                return <AppLayout>{children}</AppLayout>
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