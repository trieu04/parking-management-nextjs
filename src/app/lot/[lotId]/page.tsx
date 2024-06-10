'use client'

import { Box, Button, Typography } from '@mui/joy'
import Link from 'next/link'

export default function LotPage() {
    return (
        <Box sx={{ px: 2 }}>
            <Typography>
                Hello world! This is <b>Parking Management App</b>
            </Typography>
            <br />
            <Button component={Link} href="/home" variant="soft" color="primary">
                Console Home
            </Button>
        </Box>
    )
}