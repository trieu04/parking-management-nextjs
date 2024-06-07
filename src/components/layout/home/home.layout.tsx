import { Box, CssBaseline, GlobalStyles, IconButton, Sheet, Typography } from "@mui/joy"
import { CssVarsProvider } from "@mui/joy/styles"
import Header from "../Header"
import { NextPage } from "next/types"
import React, { useState } from "react"
import MainWarp from "../MainWarp"
import { LayoutContextProvider } from "@/components/layout/LayoutContext"

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
                        gridTemplateAreas: '"header" "main"',
                        gridTemplateRows: 'min-content 1fr',
                        minHeight: '100vh'
                    }}
                >

                    <Header />

                    <MainWarp>{children}</MainWarp>

                </Box>
            </CssVarsProvider >
        </LayoutContextProvider>
    )
}