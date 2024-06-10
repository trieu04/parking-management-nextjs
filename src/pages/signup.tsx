// components/SignupForm.tsx

import React, { useState } from 'react'
import { TextField, Button, Typography, Container, Box, Input, FormLabel, Alert, IconButton } from '@mui/joy'
import type MuiJoyType from '@mui/joy'
import { CloseRounded } from '@mui/icons-material'
import Link from 'next/link'
import { PageWithLayout } from '@/pages/_app'


const Signup: PageWithLayout = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [messageColor, setMessageColor] = useState<MuiJoyType.ColorPaletteProp>('neutral')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()

            if (response.status == 400) {
                setMessage(data.message)
                setMessageColor('danger')
                return
            }

            setMessage(JSON.stringify(data))
        } catch (error) {
            setMessage('Unknown error occurred. Please try again later.')
            setMessageColor('danger')
        }
    }

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4, width: '100%' }}
                maxWidth="sm"
            >
                <Typography>
                    Sign Up
                </Typography>
                <FormLabel>Email</FormLabel>
                <Input
                    title="Email"
                    variant="outlined"
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
                    Sign Up
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
                <Button variant="outlined" color="primary" fullWidth component={Link} href='/signin' >
                    or Sign In Here
                </Button>
            </Box>
        </Container>
    )
}

Signup.layoutName = 'auth'

export default Signup