import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Grid, Theme, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PIXI, { Application, IApplicationOptions } from 'pixi.js'
import { createPixiApp } from './pixi-app'

const appOptions: IApplicationOptions = {
  width: 600,
  height: 600,
  background: 0x000000,
}

export const GameStarWars: React.FC = (): JSX.Element => {
  const sm = useMediaQuery(({ breakpoints: { down } }: Theme) => down(600))

  const canvasRef = useRef<any>(null)
  const navigate = useNavigate()

  const [app, setApp] = useState<PIXI.Application>(new Application(appOptions))
  const [start, setStart] = useState<boolean>(false)

  const onStartGames = () => {
    if (!start) {
      setStart(true)
    }
  }

  const onNewGame = () => window.location.reload()

  const onPauseGames = () => {}

  const onExitGames = () => navigate('../')

  useEffect(() => {
    canvasRef.current.appendChild(app.view)
    createPixiApp(app)
    app.start()
    return () => app.stop()
  }, [])

  return (
    <Grid container justifyContent="center" alignItems="center" width="100vw" height="100vh">
      <Grid item>
        <Grid container justifyContent="space-between" alignItems="center" mb={sm ? 3 : 4}>
          <Grid item>
            <Box fontSize={sm ? 45 : 53} fontWeight={600} color="#303030" mb={1}>
              star wars
            </Box>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Button color="primary" variant="contained" onClick={onNewGame}>
                  new game
                </Button>
              </Grid>
              <Grid item>
                <Button color="primary" variant="contained" onClick={onExitGames}>
                  exit
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justifyContent="flex-end" spacing={2}>
              <Grid item>
                <Box
                  textAlign="center"
                  p={1}
                  mt="10px"
                  mb="20px"
                  width={60}
                  fontSize={sm ? 18 : 24}
                  fontWeight={600}
                  lineHeight={1}
                  color="#303030"
                  bgcolor="rgba(48, 48, 48, 0.2)"
                  borderRadius={1}
                >
                  0
                </Box>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Button color="primary" variant="contained" onClick={onStartGames}>
                  start
                </Button>
              </Grid>
              <Grid item>
                <Button color="primary" variant="contained" onClick={onPauseGames}>
                  pause
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box ref={canvasRef} />
      </Grid>
    </Grid>
  )
}
