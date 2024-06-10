"use client"

import { Box, Avatar, Typography, IconButton, Button } from "@mui/joy"
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded"
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react"
import { getServerSession } from "next-auth"
import { use } from "react"

export default function AccountCard() {
    const { data: session } = useSession()
    return (
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {session && session.user &&
                <>
                    <Avatar
                        variant="outlined"
                        size="sm"
                        src={session.user.image || undefined}
                    />
                    <Box sx={{ minWidth: 0, flex: 1 }}>
                        <Typography level="title-sm">{session.user.name}</Typography>
                        <Typography level="body-xs">{session.user.email}</Typography>
                    </Box>
                    <IconButton size="sm" variant="plain" color="neutral" title="Logout" onClick={() => signOut()}>
                        <LogoutRoundedIcon />
                    </IconButton>
                </>
            }
            {!session &&
                <>
                    <Button size="sm" variant="outlined">Sign up</Button>
                    <Button size="sm" onClick={() => signIn()}>Sign in</Button>
                </>
            }
        </Box>
    )
}