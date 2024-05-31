import { IconButtonProps, useColorScheme, IconButton } from "@mui/joy"
import React from "react"
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeIcon from '@mui/icons-material/LightMode'

export default function DarkModeButton(props: IconButtonProps) {
    const { mode, setMode } = useColorScheme()
    const [mounted, setMounted] = React.useState(false)
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
        } else {
            setMode('light')
        }
    }
    React.useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) {
        return <IconButton size="sm" variant="outlined" color="neutral" {...props} disabled />
    }
    return (
        <IconButton id="toggle-mode" size="sm" variant="outlined" color="neutral" {...props} onClick={toggleMode}>
            {mode != 'dark' && <DarkModeRoundedIcon />}
            {mode != 'light' && <LightModeIcon />}
        </IconButton>
    )
}
