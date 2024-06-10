import { Favorite } from '@mui/icons-material'
import { Card, CardOverflow, AspectRatio, IconButton, CardContent, Typography, Divider, Link } from '@mui/joy'
import NextLink from 'next/link'
import React from 'react'

type Props = {
    name: string,
    location: string,
    id: string
}

const LotCard: React.FC<Props> = ({ name, location, id }) => {
    // Implement your component logic here

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography level="title-md">
                    <Link href={"/lot/" + id} overlay underline="none" component={NextLink}>
                        {name}
                    </Link>
                </Typography>
                <Typography level="body-sm">
                    {location}
                </Typography>
            </CardContent>
            <CardOverflow variant="soft">
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                    {/* <Typography level="body-xs">6.3k views</Typography>
                    <Divider orientation="vertical" />
                    <Typography level="body-xs">1 hour ago</Typography> */}
                </CardContent>
            </CardOverflow>
        </Card>
    )
}

export default LotCard