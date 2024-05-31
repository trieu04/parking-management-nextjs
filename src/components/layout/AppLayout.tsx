import { Box, CssBaseline, GlobalStyles, IconButton, Sheet, Typography } from "@mui/joy"
import { CssVarsProvider } from "@mui/joy/styles"
import AppSidebar from "./AppSidebar"
import AppHeader from "./AppHeader"
import AppFeatureBar from "./AppFeatureBar"
import { NextPage } from "next/types"
import React from "react"


export type AppLayoutPageOption = {
    breadcums?: string[],
    title?: string
}

export type  AppLayoutPage = NextPage & {
    layout: "app",
    options?: AppLayoutPageOption
}

export default function AppLayout({
    children,
    options
}: {
    children: React.ReactNode,
    options?: AppLayoutPageOption
}) {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <GlobalStyles styles={(theme) => ({
                ':root': {
                    '--Sidebar-width': '240px',
                    '--Header-height': '52px',
                    '--SideNavigation-desktopSlideIn': 1, // #TODO
                    '--SideNavigation-mobileSlideIn': 0,
                }
            })} />

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateAreas: '"nav header" "nav main"',
                    gridTemplateColumns: 'min-content 1fr',
                    gridTemplateRows: 'min-content 1fr',
                    minHeight: '100vh'
                }}
            >
                <Box component="nav"
                    sx={{
                        gridArea: "nav",
                        position: "sticky",
                        height: "100vh",
                        top: 0,
                        zIndex: 10000,
                    }}
                >
                    <AppSidebar />
                </Box>

                <Box component="header"
                    sx={{
                        gridArea: 'header',
                        position: 'sticky',
                        top: 0,
                        zIndex: 10010,
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            width: '100%',
                        }}
                    >
                        <AppHeader />

                    </Box>
                </Box>

                <Box component="main"
                    sx={{
                        overflow: 'auto',
                        position: 'relative',
                        maxHeight: '100vh',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute'
                        }}
                    >
                        <AppFeatureBar title={options?.title}/>
                        {children}
                    </Box>

                </Box>
            </Box>
        </CssVarsProvider >
    )
}