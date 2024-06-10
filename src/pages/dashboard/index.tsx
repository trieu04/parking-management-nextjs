import React, { useEffect, useContext } from 'react'
import Box from '@mui/joy/Box'
import { LayoutContext } from '@/components/layout/LayoutContext'
import { useSession } from 'next-auth/react'
import { Button, Grid } from '@mui/joy'
import AddIcon from '@mui/icons-material/Add'
import LotCard from '@/components/lot/LotCard'
import CreateLot from '@/components/lot/CreateLot'

type LotType = {
    id: string,
    name: string,
    location: string
}

const Dashboard = () => {
    const { setHeaderText, setMainTitle } = useContext(LayoutContext)
    const [openCreateLot, setOpenCreateLot] = React.useState(false)
    const [lotsLoading, setLotLoading] = React.useState(true)
    const [lots, setLots] = React.useState<LotType[]>([])
    useEffect(() => {
        setHeaderText('Parking Management App')
        setMainTitle('Dashboard')

        setLotLoading(true)
        fetch('/api/lot')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setLots(data.data)
                setLotLoading(false)
            })
            .catch(error => {
                console.error('Error:', error)
            })
    }, [])

    return (
        <Box
            sx={{
                paddingX: "16px",
            }}
        >
            <Button
                startDecorator={<AddIcon />}
                onClick={() => setOpenCreateLot(true)}
            >
                New Parking Lot
            </Button>
            <CreateLot open={openCreateLot} setOpen={setOpenCreateLot}></CreateLot>
            <Box height="16px"></Box>
            <Grid container spacing="16px">

                {lots.length > 0 &&
                    lots.map((item, index) => {
                        return (
                            <Grid key={index} md={4} sm={6} xs={12}>
                                <LotCard name={item.name} location={item.location} id={item.id} />
                            </Grid>
                        )
                    })
                }
            </Grid>

        </Box>
    )
}

Dashboard.layoutName = "dashboard"

export default Dashboard