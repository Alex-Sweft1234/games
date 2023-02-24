import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Grid, Theme, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PIXI, { Application, IApplicationOptions } from 'pixi.js'
import { createPixiApp, startGame, stopGame, continueGame } from './pixi-app'
import { onMoveKeyboard } from './detect'

const appOptions: IApplicationOptions = {
  width: window.innerWidth < 450 ? window.innerWidth : 450,
  height: window.innerWidth < 450 ? window.innerHeight * 0.75 : 600,
  background: 0x303030,
}

export const GameRacePage: React.FC = (): JSX.Element => {
  const sm = useMediaQuery(({ breakpoints: { down } }: Theme) => down(600))

  const canvasRef = useRef<any>(null)
  const navigate = useNavigate()

  const [app, setApp] = useState<PIXI.Application>(new Application(appOptions))
  const [start, setStart] = useState<boolean>(false)
  const [stop, setStop] = useState<boolean>(false)

  const onStartGames = () => {
    if (!start && !stop) {
      startGame(app, () => setStop(true))
      setStart(true)
    } else if (!stop) continueGame(app)
  }

  const onNewGame = () => window.location.reload()

  const onPauseGames = () => stopGame(app)

  const onExitGames = () => navigate('../')

  useEffect(() => {
    canvasRef.current.appendChild(app.view)
    createPixiApp(app)
    app.start()
    return () => app.stop()
  }, [])

  useEffect(() => {
    onMoveKeyboard(app, () => setStop(true))
  }, [])

  return (
    <Grid container justifyContent="center" alignItems="center" width="100vw" height="100vh">
      <Grid item>
        <Grid container justifyContent="space-between" alignItems="center" mb={sm ? 3 : 4}>
          <Grid item>
            <Box fontSize={sm ? 45 : 53} fontWeight={600} color="#303030" mb={1}>
              race
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
        <Box id="race" ref={canvasRef} />
      </Grid>
    </Grid>
  )
}
