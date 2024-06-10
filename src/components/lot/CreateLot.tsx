import { Button, DialogContent, DialogTitle, FormControl, FormLabel, Input, Modal, ModalDialog, Stack, ModalClose, Typography, Select, Option, Grid, Chip, Box } from '@mui/joy'
import React, { use, useCallback } from 'react'


const GridBreak = () => <Box width='100%' />

type Props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateLot: React.FC<Props> = ({
    open,
    setOpen
}) => {
    const [currency, setCurrency] = React.useState('VND')
    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const data = formData.entries()

        fetch('/api/lot', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(data)),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
    }, [])

    return (
        <Modal keepMounted open={open} onClose={() => setOpen(false)}>
            <ModalDialog layout='fullscreen' >
                <ModalClose />
                <DialogTitle>Create new Parking Lot</DialogTitle>
                <DialogContent>
                    <Typography>Fill in the information to create a Parking lot.</Typography>
                    <form
                        onSubmit={handleSubmit}
                    >
                        <Grid container spacing={1} maxWidth="100%">
                            <Grid xs={12} md={6}>
                                <FormLabel>Name</FormLabel>
                                <Input name="name" autoFocus required />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <FormLabel>Location</FormLabel>
                                <Input name="location" />
                            </Grid>
                            <GridBreak />
                            <Grid xs={12} md={6}>
                                <FormLabel>Currency</FormLabel>
                                <input type='hidden' name="currency" value={currency} />
                                <Select
                                    variant="outlined"
                                    value={currency}
                                    onChange={(_, value) => setCurrency(value!)}
                                    slotProps={{
                                        listbox: {
                                            variant: 'outlined',
                                        },
                                    }}
                                >
                                    <Option value="VND">VND</Option>
                                    <Option value="USD">USD</Option>
                                </Select>
                            </Grid>
                            <GridBreak />

                            <Grid>
                                <FormLabel>Bicycle</FormLabel>
                            </Grid>
                            <GridBreak />
                            <Grid xs={6} md={3}>
                                <Input
                                    startDecorator={
                                        <Chip>Minium</Chip>
                                    }
                                    name="bicycleMiniumPrice"
                                    type='number'
                                    fullWidth
                                />
                            </Grid>
                            <Grid xs={6} md={3}>
                                <Input
                                    startDecorator={
                                        <Chip>Hourly</Chip>
                                    }
                                    name="bicyclePriceHourly"
                                    type='number'
                                />
                            </Grid>
                            <GridBreak />


                            <Grid>
                                <FormLabel>Motorbike</FormLabel>
                            </Grid>

                            <GridBreak />

                            <Grid xs={6} md={3}>
                                <Input
                                    startDecorator={
                                        <Chip>Minium</Chip>
                                    }
                                    name="motorbikeMiniumPrice"
                                    type='number'
                                />
                            </Grid>
                            <Grid xs={6} md={3}>
                                <Input
                                    startDecorator={
                                        <Chip>Hourly</Chip>
                                    }
                                    name="motorbikePriceHourly"
                                    type='number'
                                />
                            </Grid>

                            <GridBreak />
                            <Grid>
                                <FormLabel>Car</FormLabel>
                            </Grid>
                            <GridBreak />


                            <Grid xs={6} md={3}>
                                <Input
                                    startDecorator={
                                        <Chip>Minium</Chip>
                                    }
                                    name="carMiniumPrice"
                                    type='number'
                                />
                            </Grid>
                            <Grid xs={6} md={3}>
                                <Input
                                    startDecorator={
                                        <Chip>Hourly</Chip>
                                    }
                                    name="carPriceHourly"
                                    type='number'
                                />
                            </Grid>
                            <GridBreak />


                            <Grid>
                                <FormLabel>Create a Parking Zone</FormLabel>
                            </Grid>
                            <GridBreak />

                            <Grid xs={12} md={6}>

                                <FormLabel>Zone name</FormLabel>
                                <Input name="zoneName" defaultValue="Main" />
                            </Grid>
                            <GridBreak />
                            <Grid xs={4} md={4}>

                                <FormLabel>Bicycle Space</FormLabel>
                                <Input name="bicycleSpace" type="number" defaultValue={0} />
                            </Grid>
                            <Grid xs={4} md={4}>

                                <FormLabel>Bike Space</FormLabel>
                                <Input name="motorbikeSpace" type="number" defaultValue={0} />
                            </Grid>
                            <Grid xs={4} md={4}>

                                <FormLabel>Car Space</FormLabel>
                                <Input name="carSpace" type="number" defaultValue={0} />
                            </Grid>
                            <GridBreak />
                            <Grid>
                                <Button type="submit">Create</Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>

            </ModalDialog>
        </Modal >
    )
}

export default CreateLot