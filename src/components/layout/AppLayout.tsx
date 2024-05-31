import { Box, CssBaseline, GlobalStyles, IconButton, Sheet, Typography } from "@mui/joy"
import { CssVarsProvider } from "@mui/joy/styles"
import NavBar from "./NavBar"
import Header from "./Header"
import { NextPage } from "next/types"
import React, { useState } from "react"
import MainWarp from "./MainWarp"
import { LayoutContextProvider } from "./LayoutContext"


export type AppLayoutPage = NextPage & {
    layoutName: "app"
}



export default function AppLayout({
    children
}: {
    children: React.ReactNode
}) {

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

                    <NavBar />

                    <Header />

                    <MainWarp>{children}</MainWarp>

                </Box>
            </CssVarsProvider >
        </LayoutContextProvider>
    )
}