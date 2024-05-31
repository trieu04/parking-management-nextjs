import { Sheet, Box, IconButton, Typography } from "@mui/joy"
import MenuIcon from "@mui/icons-material/Menu"
import Account from "./Account"
import { toggleAppSidebar } from "./utils"


export type Props = {
    headerText: string
}

export default function AppHeader({
    headerText
}: Props) {
    return (
        <Box
            sx={{
                position: 'absolute',
                width: '100%',
            }}
        >
            <Sheet
                sx={{
                    height: 'var(--Header-height)',
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
                        <IconButton onClick={() => toggleAppSidebar()} title="Toggle Sidebar">
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Typography level="title-lg">{headerText}</Typography>
                </Box>
                <Box sx={{ flexShrink: 0 }}>
                    <Account />
                </Box>
            </Sheet>
        </Box>
    )
}