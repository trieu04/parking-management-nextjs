import { LayoutContext } from '@/components/layout/LayoutContext'
import { GetServerSideProps, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import prisma from '@/db'
import { useParams } from 'next/navigation'
import { PageWithLayout } from '@/pages/_app'
import { Alert, Typography } from '@mui/joy'


type Props = {
    lotName?: string
    lotId?: string
}

const LotPage: PageWithLayout = ({
    lotName,
    lotId
}: Props) => {
    const { setHeaderText, setMainTitle } = useContext(LayoutContext)
    useEffect(() => {
        setHeaderText('Nextjs Layout Template')
        setMainTitle('Lot')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(lotId === null) {
        return <Alert variant='outlined' color='warning'>Lot not found</Alert>
    }


    return (
        <div>
            <i>Lot {lotId}</i>
            <br />
            <i>Lot Name {lotName}</i>
            <div>1haha</div>
            <div>2haha</div>
            <div>3haha</div>
            <div>4haha</div>
            <div>5haha</div>
            <div>6haha</div>
            <div>7haha</div>
            <div>8haha</div>
            <div>9haha</div>
            <div>10haha</div>
            <div>11haha</div>
            <div>12haha</div>
            <div>13haha</div>
            <div>14haha</div>
            <div>15haha</div>
            <div>16haha</div>
            <div>17haha</div>
            <div>18haha</div>
            <div>19haha</div>
            <div>20haha</div>
            <div>21haha</div>
            <div>22haha</div>
            <div>23haha</div>
            <div>24haha</div>
            <div>25haha</div>
            <div>26haha</div>
            <div>27haha</div>
            <div>28haha</div>
            <div>29haha</div>
            <div>30haha</div>
            <div>31haha</div>
            <div>32haha</div>
            <div>33haha</div>
            <div>34haha</div>
            <div>35haha</div>
            <div>36haha</div>
            <div>37haha</div>
            <div>38haha</div>
            <div>39haha</div>
            <div>40haha</div>
            <div>41haha</div>
            <div>42haha</div>
            <div>43haha</div>
            <div>44haha</div>
            <div>45haha</div>
            <div>46haha</div>
            <div>47haha</div>
            <div>48haha</div>
            <div>49haha</div>
            <div>50haha</div>
            <div>51haha</div>
            <div>52haha</div>
            <div>53haha</div>
            <div>54haha</div>
            <div>55haha</div>
            <div>56haha</div>
            <div>57haha</div>
            <div>58haha</div>
            <div>59haha</div>
            <div>60haha</div>
            <div>61haha</div>
            <div>62haha</div>
            <div>63haha</div>
            <div>64haha</div>
            <div>65haha</div>
            <div>66haha</div>
            <div>67haha</div>
            <div>68haha</div>
            <div>69haha</div>
            <div>70haha</div>
            <div>71haha</div>
            <div>72haha</div>
            <div>73haha</div>
            <div>74haha</div>
            <div>75haha</div>
            <div>76haha</div>
            <div>77haha</div>
            <div>78haha</div>
            <div>79haha</div>
            <div>80haha</div>
            <div>81haha</div>
            <div>82haha</div>
            <div>83haha</div>
            <div>84haha</div>
            <div>85haha</div>
            <div>86haha</div>
            <div>87haha</div>
            <div>88haha</div>
            <div>89haha</div>
            <div>90haha</div>
            <div>91haha</div>
            <div>92haha</div>
            <div>93haha</div>
            <div>94haha</div>
            <div>95haha</div>
            <div>96haha</div>
            <div>97haha</div>
            <div>98haha</div>
            <div>99haha</div>
            <div>100haha</div>
        </div>
    )
}

LotPage.layoutName = 'home'

export default LotPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { lotId } = params as { lotId: string }
    let lotName = ''
    const lot = await prisma.parkingLot.findFirst({ where: { id: lotId } })
    if (lot) {
        lotName = lot.name
    }
    return {
        props: {
            lotId: lot ? lot.id : null,
            lotName
        }
    }
}

