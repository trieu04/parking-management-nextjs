import { Sheet, Box, IconButton, Typography, GlobalStyles } from "@mui/joy"
import MenuIcon from "@mui/icons-material/Menu"
import Account from "./Account"
import { toggleNavBar } from "./utils"
import { useContext } from "react"
import { LayoutContext } from "./LayoutContext"



export default function AppHeader() {
    return (
        <Box component="header"
            sx={{
                gridArea: 'header',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
            }}
        >
            <GlobalStyles styles={{
                ':root': {
                    '--Header-height': '52px'
                }
            }} />
            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                }}
            >
                <Sheet
                    sx={{
                        height: 'var(--Header-height, 52px)',
                        display: 'flex',
                        alignItems: 'center',
                        p: 2,
                        gap: 1,
                        borderBottom: '1px solid',
                        borderColor: 'background.level1',
                        boxShadow: 'sm',
                    }}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            gap: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Box
                            sx={{
                                display: {
                                    'md': 'none',
                                    'xs': 'block'
                                }
                            }}
                        >
                        </Box>
                        <Typography level="title-lg">Parking Management App</Typography>
                    </Box>
                    <Box sx={{ flexShrink: 0 }}>
                        <Account />
                    </Box>
                </Sheet>
            </Box>
        </Box>
    )
}