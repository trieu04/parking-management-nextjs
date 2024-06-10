'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Box, Typography } from '@mui/joy'
import HomePage from '@/app/home/page'


type Props = {
    params: { alias: string } 
}

export default function PageAlias({ params }: Props) {
    const alias = params.alias
    const router = useRouter()

    if(alias == "~") {
        router.replace('/home')
        return <HomePage></HomePage>
    }

    return (
        <Box sx={{ px: 2 }}>
            <Typography>
                Not found alias {alias}
            </Typography>
        </Box>
    )
}