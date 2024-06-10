import { Box, CssBaseline, GlobalStyles, IconButton, Sheet, Typography } from "@mui/joy"
import { CssVarsProvider } from "@mui/joy/styles"
import React, { useState } from "react"
import MainWarp from "../MainWarp"
import { LayoutContextProvider } from "@/components/layout/LayoutContext"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Link from "next/link"

type Props = {
    children: React.ReactNode
}

export default function AuthLayout({
    children,
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

                    <Box>
                        <IconButton component={Link} href="/"
                            sx={{
                                textDecorationLine: 'none',
                                gap: 1
                            }}
                        >
                            <ArrowBackIcon />
                            <Typography component="h2">
                                {"Parking Management"}
                            </Typography>
                        </IconButton>
                    </Box>

                    <Box component="main"
                        sx={{
                            gridArea: 'main',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: 4
                        }}
                    >
                        {children}
                    </Box>


                </Box>
            </CssVarsProvider >
        </LayoutContextProvider>
    )
}