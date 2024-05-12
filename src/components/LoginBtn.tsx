import { Box, Button, Typography } from "@mui/joy"
import { useSession, signIn, signOut } from "next-auth/react"
export default function LoginBtn() {
    const { data: session } = useSession()

    return (
        <Box sx={{ py: 2, borderRadius: 2 }}>
            {session && session.user ?
                <>
                    <Typography>Signed in as <b>{session.user.email}</b> </Typography>
                    <Button size="sm" onClick={() => signOut()}>Sign out</Button>
                </>
                :
                <>
                    <Typography>Not signed in </Typography>
                    <Button size="sm" onClick={() => signIn()}>Sign in</Button>
                </>
            }
        </Box >
    )
}