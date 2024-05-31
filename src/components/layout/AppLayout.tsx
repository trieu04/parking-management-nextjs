import { Box, CssBaseline, GlobalStyles, IconButton, Sheet, Typography } from "@mui/joy"
import { CssVarsProvider } from "@mui/joy/styles"
import AppSidebar from "./AppSidebar"
import AppHeader from "./AppHeader"
import AppFeatureBar from "./AppFeatureBar"
import { NextPage } from "next/types"
import React, { useState } from "react"


export type AppLayoutPage = NextPage & {
    layoutName: "app"
}

export type BreadcumsBlock = {
    title: string,
    href: string
}

type AppLayoutContextType = {
    headerText: string,
    setHeaderText: React.Dispatch<React.SetStateAction<string>>
    title: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>
    breadcums: BreadcumsBlock[],
    setBreadcums: React.Dispatch<React.SetStateAction<BreadcumsBlock[]>>
}

export const AppLayoutContext = React.createContext<AppLayoutContextType>({} as AppLayoutContextType)


export default function AppLayout({
    children
}: {
    children: React.ReactNode
}) {
    const [headerText, setHeaderText] = useState("")
    const [breadcums, setBreadcums] = useState<BreadcumsBlock[]>([])
    const [title, setTitle] = useState("")
    return (
        <AppLayoutContext.Provider value={{
            headerText,
            setHeaderText,
            title,
            setTitle,
            breadcums,
            setBreadcums
        }}>


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

                        <AppHeader headerText={headerText} />

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

                            <AppFeatureBar title={title} />
                            
                            {children}

                        </Box>

                    </Box>
                </Box>
            </CssVarsProvider >
        </AppLayoutContext.Provider>
    )
}