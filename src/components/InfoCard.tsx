import useSessionStorage from "@/hooks/useSessionStorage"
import { CloseRounded as CloseRoundedIcon } from "@mui/icons-material"
import { Card, Stack, Typography, IconButton, LinearProgress, Button } from "@mui/joy"
import { useState } from "react"

export function UsedSpaceWaringCard() {
    const [close, setClose] = useSessionStorage('card_used-space-warning', false)
    if (close) {
        return <></>
    }
    return (
        <Card
            invertedColors
            variant="soft"
            color="warning"
            size="sm"
            sx={{ boxShadow: 'none', my: 1 }}
        >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography level="title-sm">Used space</Typography>
                <IconButton size="sm" onClick={() => setClose(true)}>
                    <CloseRoundedIcon />
                </IconButton>
            </Stack>
            <Typography level="body-xs">
                Your team has used 80% of your available space. Need more?
            </Typography>
            <LinearProgress variant="outlined" value={80} determinate sx={{ my: 1 }} />
            <Button size="sm" variant="solid">
                Upgrade plan
            </Button>

        </Card >
    )
}