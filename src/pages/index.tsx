'use client'

import { Box, Button, Typography } from '@mui/joy'
import { GetStaticProps } from 'next'
import prisma from '../../prisma/db'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const count = await prisma.user.count()
  return {
    props: {
      userCount: count
    },
    revalidate: 10,
  }
}

type Props = {
  userCount: number
}

export default function Home(props: Props) {
  return (
    <Box sx={{ px: 2 }}>
      <Typography>
        Hello world! This is <b>Parking Management App</b>
      </Typography>
      <Typography>
        Current User: {props.userCount}
      </Typography>
      <br />
      <Button component={Link} href="/dashboard" variant="soft" color="primary">
        Dashboard
      </Button>
    </Box>
  )
}
