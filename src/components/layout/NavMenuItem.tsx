'use client'

import { AssignmentRounded, KeyboardArrowDown, ShoppingCartRounded, Circle } from "@mui/icons-material"
import { ListItem, ListItemButton, ListItemContent, Typography, List, Box, IconButton } from "@mui/joy"
import React, { ReactElement, useEffect } from "react"
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { useRouter } from "next/router"
import useLocalStorage from '@/hooks/useLocalStorage'

function isMatch(path: string, fullPath: string) {
  const patt = new RegExp(`^${path}($|\/)`)
  if (fullPath.match(patt)) return true

  return false
}

type NavMenuItemProps = {
  title: string,
  path: string,
  icon?: React.JSX.Element
}


export function NavMenuItem(props: NavMenuItemProps) {
  const pathname = usePathname()
  const match = typeof pathname == 'string' && isMatch(props.path, pathname)
  const router = useRouter()
  return (
    <ListItem>
      <ListItemButton selected={match} onClick={() => router.push(props.path)}>
        {props.icon || <Circle />}
        <ListItemContent>
          <Typography level="title-sm">{props.title}</Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  )
}

type NavMenuItemNestedProps = {
  title: string,
  path: string,
  icon?: React.JSX.Element,
  defaultExpanded?: boolean,
  nested: { title: string, path: string }[]
}

export function NavMenuItemNested(props: NavMenuItemNestedProps) {
  const pathname = usePathname()
  const subPath = '/' + pathname?.split('/').slice(2).join('/')
  const match = typeof pathname == 'string' && isMatch(props.path, pathname)
  const router = useRouter()

  const [menuOpen, setMenuOpen] = useLocalStorage<boolean>('menu_menua', props.defaultExpanded || true)
  return (
    <ListItem nested>
      <ListItemButton selected={match} onClick={() => setMenuOpen((value) => !value)}>
        {props.icon || <Circle />}
        <ListItemContent>
          <Typography level="title-sm">{props.title}</Typography>
        </ListItemContent>
        <KeyboardArrowDown sx={{ transform: menuOpen ? 'rotate(180deg)' : 'none' }} />
      </ListItemButton>
      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: menuOpen ? '1fr' : '0fr',
          transition: '0.2s ease',
          '& > *': { overflow: 'hidden' },
          mt: 0.5,
          ml: '30px'
        }}
      >
        <List sx={{ gap: 0.5 }}>  
          {props.nested.map((item, index) => {
            const match = typeof pathname == 'string' && isMatch(item.path, subPath)
            return (
              <ListItem key={index}>
                <ListItemButton selected={match} onClick={() => router.push(item.path)}>
                  {item.title}
                </ListItemButton>
              </ListItem>
            )
          })
          }
        </List>
      </Box>

    </ListItem >
  )
}