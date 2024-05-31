import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import { Box, Breadcrumbs, Link, Typography } from "@mui/joy"
import { useEffect } from "react"


export type Props = {
    title?: string
}

export default function AppFeatureBar({
    title
}: Props) {

    return (
        <Box
            sx={{
                paddingTop: '62px',
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
                        {title}
                    </Typography>
                </Box>
            }
        </Box>
    )
}