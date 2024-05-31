import React, {useEffect, useContext} from 'react'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Breadcrumbs from '@mui/joy/Breadcrumbs'
import Link from '@mui/joy/Link'
import Typography from '@mui/joy/Typography'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import AppLayout, { AppLayoutContext } from '@/components/layout/AppLayout'


const Dashboard = () => {
  const { setHeaderText, setTitle } = useContext(AppLayoutContext)


  useEffect(() => {
    setHeaderText('Dashboard')
    setTitle('Dashboard')
  }, [])

  return (
      <Box
        className="MainContent"
        sx={{
          px: '16px',
        }}
      >
        Some thing here

      </Box>
  )
}

Dashboard.layoutName = "app"

export default Dashboard