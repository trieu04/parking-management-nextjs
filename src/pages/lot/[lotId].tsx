import { LayoutContext } from '@/components/layout/LayoutContext'
import { GetServerSideProps, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import prisma from '@/db'
import { useParams } from 'next/navigation'
import { PageWithLayout } from '@/pages/_app'
import { Alert, Typography, Box } from '@mui/joy'
import { decodeSession } from '@/auth'
import type Prisma from '@prisma/client'


export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
    const token = await decodeSession(req)
    if (!token || !token.sub) {
        return {
            props: {}
        }
    }

    const check = await prisma.parkingLotManager.findFirst({
        where: {
            parkingLotId: params?.lotId as string,
            userId: token.sub
        }
    })
    if (!check) {
        return {
            props: {}
        }
    }

    return {
        props: {
            lotName: check.role,
            lotId: check.parkingLotId
        }
    }
}


type Props = {
    lotId?: string
    role?: string
}

const LotPage: PageWithLayout = ({
    lotId
}: Props) => {
    const { setHeaderText, setMainTitle } = useContext(LayoutContext)
    const [lotData, setLotData] = useState<Prisma.ParkingLot>()
    useEffect(() => {
        if (lotId) {
            fetch('/api/lot/' + lotId)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data as Prisma.ParkingLot)
                    setLotData(data as Prisma.ParkingLot)
                })
                .catch((error) => {
                    console.error('Error fetching lot data')
                    console.error(error)
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (lotId === null) {
        return <Alert variant='outlined' color='warning'>Lot not found</Alert>
    }



    return (
        <div>
            {lotData &&

                <Box>
                    <Typography component='h1'>{lotData.name}</Typography>

                </Box>
            }
        </div>
    )
}

LotPage.layoutName = 'lot'

export default LotPage

