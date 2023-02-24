import React from 'react'
import { Box, Grid, Link } from '@mui/material'
import { MyLink } from '../../components'

import 'react-toastify/dist/ReactToastify.css'

type MenuProps = {
  title: string
  path: string
}

const menu: MenuProps[] = [
  {
    title: '2048',
    path: '2048',
  },
  // {
  //   title: 'race',
  //   path: 'race',
  // },
  // {
  //   title: 'star wars',
  //   path: 'wars',
  // },
]

export const MainPage: React.FC = (): JSX.Element => {
  return (
    <Grid container alignItems="center" justifyContent="center" height="100vh">
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Box textAlign="center" fontWeight={600} color="#303030" fontSize={36} mb={3}>
              <Box fontWeight={500} fontSize={32}>
                HTML5-games on
              </Box>
              React.js
            </Box>
          </Grid>
          {menu.map((k, i) => {
            return (
              <Grid key={`item-${i}`} item mb="12px">
                <Grid container justifyContent="center">
                  <Grid item>
                    <Link component={MyLink} to={`${k.path}`} fontSize={28} fontWeight={500}>
                      {k.title}
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}
