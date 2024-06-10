'use client'


import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import SupportRoundedIcon from '@mui/icons-material/SupportRounded'
import Box from '@mui/joy/Box'
import Divider from '@mui/joy/Divider'
import GlobalStyles from '@mui/joy/GlobalStyles'
import IconButton, { IconButtonProps } from '@mui/joy/IconButton'
import Input from '@mui/joy/Input'
import List from '@mui/joy/List'
import Sheet from '@mui/joy/Sheet'
import Typography from '@mui/joy/Typography'
import { useColorScheme } from '@mui/joy/styles'
import { toggleNavBar } from '../utils'
import { UsedSpaceWaringCard } from '../../InfoCard'
import { NavMenuItem, NavMenuItemNested } from '../NavMenuItem'
import DarkModeButton from '../DarkModeButton'


export default function NavBar() {

    return (<>
        <Box component="nav"
            sx={{
                gridArea: "nav",
                position: "sticky",
                height: "100vh",
                top: 0,
                zIndex: 10000,
            }}
        >
            <GlobalStyles styles={{
                ':root': {
                    '--NavBar-width': '240px',
                    '--Header-height': '52px',
                    '--NavBar-mobileSlideIn': 0,
                }
            }} />
            <Box
                onClick={() => toggleNavBar()}
                sx={{
                    display: {
                        xs: 'block',
                        md: 'none'
                    },
                    transform: 'translateX(calc(100% * (var(--NavBar-mobileSlideIn, 0) - 1)))',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    opacity: 'var(--NavBar-mobileSlideIn, 0)',
                    backgroundColor: 'var(--joy-palette-background-backdrop)',
                    zIndex: 9990,
                }}
            />
            <Sheet
                sx={{
                    position: {
                        xs: 'fixed',
                        md: 'sticky'
                    },
                    transform: {
                        xs: 'translateX(calc(100% * (var(--NavBar-mobileSlideIn, 0) - 1)))',
                        md: 'unset'
                    },
                    transition: 'transform 0.4s',
                    zIndex: 10000,
                    width: '240px',
                    height: '100vh',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRight: '1px solid',
                    borderColor: 'divider',
                }}
            >


                <Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" />
                <Box
                    sx={{
                        minHeight: 0,
                        overflow: 'hidden auto',
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >

                    <List
                        size="sm"
                        sx={{
                            gap: 1,
                            '--ListItem-radius': (theme) => theme.vars.radius.sm,
                        }}
                    >
                        <NavMenuItem title="Dashboard" path="/home" />
                        <NavMenuItemNested title="Parking Lots" path="/lots" nested={[
                            { title: "Lot 1", path: "/lot/id1" },
                            { title: "Lot 2", path: "/lot/id2" }
                        ]} />
                    </List>


                    <UsedSpaceWaringCard />
                    <Divider />
                    <Box sx={{ display: 'flex', alignItems: 'center', my: 0.5 }}>
                        <Typography level="title-sm">Dark Mode</Typography>
                        <DarkModeButton sx={{ ml: 'auto' }} />
                    </Box>
                    <Divider />
                    <List
                        size="sm"
                        sx={{
                            mt: 'auto',
                            flexGrow: 0,
                            '--ListItem-radius': (theme) => theme.vars.radius.sm,
                        }}
                    >


                        <NavMenuItem title="Support" path="#" icon={<SupportRoundedIcon />} />
                        <NavMenuItem title="Setting" path="#" icon={<SupportRoundedIcon />} />
                    </List>
                </Box>
            </Sheet>
        </Box>
    </>)
}