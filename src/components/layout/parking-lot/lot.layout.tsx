import { Box, CssBaseline, GlobalStyles, IconButton, Sheet, Typography } from "@mui/joy"
import { CssVarsProvider } from "@mui/joy/styles"
import NavBar from "./NavBar"
import Header from "../Header"
import { NextPage } from "next/types"
import React, { useState } from "react"
import MainWarp from "../MainWarp"
import { LayoutContextProvider } from "@/components/layout/LayoutContext"


export type PageWithLotLayout = NextPage & {
    layoutName: "lot"
}


type Props = {
    children: React.ReactNode,
    hideNavBar?: boolean
}

export default function LotLayout({
    children,
    hideNavBar
}: Props) {

    return (
        <LayoutContextProvider>
            <CssVarsProvider disableTransitionOnChange>
                <CssBaseline />
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateAreas: '"nav header" "nav main"',
                        gridTemplateColumns: 'min-content 1fr',
                        gridTemplateRows: 'min-content 1fr',
                        minHeight: '100vh'
                    }}
                >
                    {!hideNavBar &&
                        <NavBar />
                    }

                    <Header />

                    <MainWarp>{children}</MainWarp>

                </Box>
            </CssVarsProvider >
        </LayoutContextProvider>
    )
}