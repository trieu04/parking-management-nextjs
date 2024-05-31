import React, { useEffect, useContext } from 'react'
import Box from '@mui/joy/Box'
import { LayoutContext } from '@/components/layout/LayoutContext'


const Dashboard = () => {
  const { setHeaderText, setMainTitle } = useContext(LayoutContext)


  useEffect(() => {
    setHeaderText('Nextjs Layout Template')
    setMainTitle('Dashboard')

    // eslint-disable-next-line react-hooks/exhaustive-deps
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