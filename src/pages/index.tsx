'use client'

import { Box, Button, Typography } from '@mui/joy'
import { GetServerSideProps, GetStaticProps } from 'next'
import prisma from '../db'
import Link from 'next/link'
import { PageWithLayout } from './_app'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const count = await prisma.user.count()
  return {
    props: {
      userCount: count
    }
  }
}

type Props = {
  userCount: number
}

const IndexPage: PageWithLayout<Props> = ({
  userCount
}: Props) => {
  return (
    <Box sx={{ px: 2 }}>
      <Typography>
        Hello world! This is <b>Parking Management App</b>
      </Typography>
      <Typography>
        Current User: {userCount}
      </Typography>
      <br />
      <Button component={Link} href="/dashboard" variant="soft" color="primary">
        Dashboard
      </Button>
    </Box>
  )
}

IndexPage.layoutName = 'dashboard'

export default IndexPage
