'use client'

import React, { useState } from 'react'
import { TextField, Button, Typography, Container, Box, Input, Alert, FormLabel, IconButton } from '@mui/joy'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import type MuiJoyType from '@mui/joy'
import Link from 'next/link'
import { CloseRounded } from '@mui/icons-material'

export default function () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [messageColor, setMessageColor] = useState<MuiJoyType.ColorPaletteProp>('neutral')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password
            })

            if (result?.ok) {
                router.push('/')
            }
            else {
                setMessageColor('danger')
                setMessage("Failed to sign in")
                setMessageColor('danger')
            }
        }
        catch (error) {
            console.error(error)
            setMessage("Unknown error occurred. Please try again later.")
            setMessageColor('danger')
        }
    }

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}
            >
                <Typography>
                    Sign In
                </Typography>
                <FormLabel>Email</FormLabel>
                <Input
                    title='Email'
                    variant='outlined'
                    fullWidth
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel>Password</FormLabel>
                <Input
                    title="Password"
                    variant="outlined"
                    fullWidth
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="solid" color="primary" fullWidth>
                    Sign In
                </Button>
                {message &&
                    <Alert
                        color={messageColor}
                        endDecorator={
                            <IconButton variant="soft" color={messageColor} onClick={() => setMessage("")}>
                                <CloseRounded />
                            </IconButton>
                        }
                    >
                        {message}
                    </Alert>
                }
                <Button variant="outlined" color="primary" fullWidth component={Link} href="/signup">
                    Create a account
                </Button>
            </Box>
        </Container>
    )
}
