import AppLayout, { AppLayoutPage } from "@/components/layout/AppLayout"
import { NextPage } from "next/types"
import { SessionProvider } from "next-auth/react"
import { AppProps } from "next/app"

type DefaultPage = NextPage & {
    layout?: never,
    option?: never
}
type AppPropsWithLayout = AppProps & {
    Component: (DefaultPage | AppLayoutPage)
}

export default function App({
    Component, pageProps: { session, ...pageProps }
}: AppPropsWithLayout) {

    const children = <Component {...pageProps} />
    const renderLayout = () => {
        switch (Component.layout) {
            case "app":
                return <AppLayout options={Component.options}>{children}</AppLayout>
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