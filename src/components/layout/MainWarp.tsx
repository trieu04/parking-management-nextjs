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
 
                </Box>

                {children}

            </Box>

        </Box>
    )
}