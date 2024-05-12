'use client'

import { Box, Typography } from '@mui/joy';
import LoginBtn from '@/components/LoginBtn'
import { GetStaticProps } from 'next';
import prisma from '../../prisma/db';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const count = await prisma.user.count();
  return {
    props: {
      userCount: count
    },
    revalidate: 10,
  };
};

type Props = {
  userCount: number
};

export default function Home(props: Props) {
  return (
    <Box sx={{ px: 2 }}>
      <Typography>
        Hello world! This is <b>Parking Management App</b>
      </Typography>
      <LoginBtn />
      <Typography>
        Current User: {props.userCount}
      </Typography>
    </Box>
  );
}
