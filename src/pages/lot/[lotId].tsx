import { AppLayoutPage } from '@/components/layout/AppLayout'
import { LayoutContext } from '@/components/layout/LayoutContext'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'


const LotPage: AppLayoutPage = () => {
    const { setHeaderText, setMainTitle } = useContext(LayoutContext)
    useEffect(() => {
        setHeaderText('Nextjs Layout Template')
        setMainTitle('Lot')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const router = useRouter()
    const { lotId } = router.query


    return (
        <div>
            <i>Lot {lotId}</i>
        </div>
    )
}

LotPage.layoutName = 'app'

export default LotPage