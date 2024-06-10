'use client'

import { Box, CssBaseline, GlobalStyles, IconButton, Sheet, Typography } from "@mui/joy"
import { CssVarsProvider } from "@mui/joy/styles"
import { NextPage } from "next/types"
import React, { useState } from "react"
import { LayoutContextProvider } from "@/components/layout/LayoutContext"
import NavBar from "@/components/layout/parking-lot/NavBar"
import Header from "@/components/layout/Header"
import MainWarp from "@/components/layout/MainWarp"
import { SessionProvider } from "next-auth/react"


type LayoutProps = {
    children: React.ReactNode
}

export default function LotLayout({
    children
}: LayoutProps) {

    return (

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

    )
}