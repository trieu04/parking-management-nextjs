import * as React from 'react'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Breadcrumbs from '@mui/joy/Breadcrumbs'
import Link from '@mui/joy/Link'
import Typography from '@mui/joy/Typography'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import AppLayout, { AppLayoutPage } from '@/components/layout/AppLayout'


const Dashboard: AppLayoutPage = () => {
  return (
    <Box
      className="MainContent"
      sx={{
        px: { xs: 2, md: 6 },
        pt: {
          xs: 'calc(12px + var(--Header-height))',
          sm: 'calc(12px + var(--Header-height))',
          md: 3,
        },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        gap: 1,
      }}
    >


    </Box>
  )
}

Dashboard.layout = "app"
Dashboard.options = {
  title: "Dashboard"
}

export default Dashboard
