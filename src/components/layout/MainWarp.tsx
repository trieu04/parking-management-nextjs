import { Box, Typography } from "@mui/joy"
import { title } from "process"
import { LayoutContext } from "./LayoutContext"
import { useContext } from "react"

type Props = {
    children: React.ReactNode,
}


export default function MainWarp({
    children
}: Props) {
    const { mainTitle } = useContext(LayoutContext)

    return (
        <Box component="main"
            sx={{
                overflow: 'auto',
                position: 'relative',
                maxHeight: '100vh',
                
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    width: '100%'
                }}
            >

                <Box
                    sx={{
                        paddingTop: 'calc(var(--Header-height, 52px) + 16px)',
                        px: '16px'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    </Box>
                    {title &&
                        <Box
                            sx={{
                                display: 'flex',
                                mb: 1,
                                gap: 1,
                                flexDirection: { xs: 'column', sm: 'row' },
                                alignItems: { xs: 'start', sm: 'center' },
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography level="h2" component="h1">
                                {mainTitle}
                            </Typography>
                        </Box>
                    }
                </Box>

                {children}

            </Box>

        </Box>
    )
}