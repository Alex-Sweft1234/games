import React, { Fragment, useEffect, useState } from 'react'
import { Box, Button, Grid, Theme, useMediaQuery, Zoom } from '@mui/material'
import { Dispatch } from 'redux'
import { useNavigate } from 'react-router-dom'
import { Board } from './components'
import { usePressDetect, useReduxDispatch, useReduxSelector, useTouchDetect } from '../../../hooks'
import { reset, update } from '../../../store/games'
import { GameStatusProps, KEYMOVE, GAMESTATUS } from '../../../types'

export const defaultBoard: number[][] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]

// генерация значения новой ячейки
function arrayRandElement(arr: number[]): number {
  const rand = Math.floor(Math.random() * arr.length)
  return arr[rand]
}

// генерация координат новой ячейки
function createCoordinates(): { i: number; j: number } {
  return { i: arrayRandElement([0, 1, 2, 3]), j: arrayRandElement([0, 1, 2, 3]) }
}

// проверка окончания игры
function gameOver(arr: number[][]): GameStatusProps {
  let emptyCells = 0
  let over: GameStatusProps = GAMESTATUS.CONTINUE

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 2048) over = GAMESTATUS.SUCCESS
      if (arr[i][j] === 0) emptyCells++
    }
  }

  if (emptyCells === 0) over = GAMESTATUS.FAILURE

  return over
}

// генерация новой ячейки
function createCell(arr: number[][]): number[][] {
  const res: number[][] = JSON.parse(JSON.stringify(arr))
  let c = createCoordinates()

  while (arr[c.i][c.j] !== 0) c = createCoordinates()

  res[c.i][c.j] = arrayRandElement([2, 4])

  return res
}

// стрелка вверх
function moveUp(arr: number[][], score: number): { board: number[][]; score: number } {
  let z: number = score // очки полученные на данном ходе
  let k = 1 // коэффициент индекса ячейки с которой проводим сравнение
  let n = 0 // коэффициент индекса текущей ячейки
  let moving = 0
  const res: number[][] = arr

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      k = 1
      n = 0
      if (arr[i - 1][j] === 0 && arr[i][j]) moving++
      while (res[i - k][j] === 0 || arr[i - k][j] === arr[i - n][j]) {
        res[i - k][j] = arr[i - k][j] + arr[i - n][j]
        if (res[i - k][j] === arr[i - n][j] * 2 || res[i - k][j] === arr[arr.length - 1][j] * 2) {
          z += res[i - k][j]
        }
        res[i - n][j] = 0
        k++
        n++
        if (i - k < 0) break
      }
    }
  }

  if (moving > 0) return { board: createCell(res), score: z }
  else return { board: res, score: z }
}

// стрелка вниз
function moveDown(arr: number[][], score: number): { board: number[][]; score: number } {
  let z = score // очки полученные на данном ходе
  let k = 1 // коэффициент индекса ячейки с которой проводим сравнение
  let n = 0 // коэффициент индекса текущей ячейки
  let moving = 0
  const res: number[][] = arr

  for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = arr.length - 1; j >= 0; j--) {
      k = 1
      n = 0
      if (arr[i + 1][j] === 0 && arr[i][j]) moving++
      while (res[i + k][j] === 0 || arr[i + k][j] === arr[i + n][j]) {
        res[i + k][j] = arr[i + k][j] + arr[i + n][j]
        if (res[i + k][j] === arr[i + n][j] * 2 || res[i + k][j] === arr[arr.length - 1][j] * 2) {
          z += res[i + k][j]
        }
        res[i + n][j] = 0
        k++
        n++
        if (i + k > arr.length - 1) break
      }
    }
  }

  if (moving > 0) return { board: createCell(res), score: z }
  else return { board: res, score: z }
}

// стрелка влево
function moveLeft(arr: number[][], score: number): { board: number[][]; score: number } {
  let z = score // очки полученные на данном ходе
  let k = 1 // коэффициент индекса ячейки с которой проводим сравнение
  let n = 0 // коэффициент индекса текущей ячейки
  let moving = 0
  const res: number[][] = arr

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      k = 1
      n = 0
      if (arr[i][j - 1] === 0 && arr[i][j]) moving++
      while (res[i][j - k] === 0 || arr[i][j - k] === arr[i][j - n]) {
        res[i][j - k] = arr[i][j - k] + arr[i][j - n]
        if (res[i][j - k] === arr[i][j - n] * 2 || res[i][j - k] === arr[i][arr.length - 1] * 2) {
          z += res[i][j - k]
        }
        res[i][j - n] = 0
        k++
        n++
        if (j - k < 0) break
      }
    }
  }

  if (moving > 0) return { board: createCell(res), score: z }
  else return { board: res, score: z }
}

// стрелка вправо
function moveRight(arr: number[][], score: number): { board: number[][]; score: number } {
  let z = score // очки полученные на данном ходе
  let k = 1 // коэффициент индекса ячейки с которой проводим сравнение
  let n = 0 // коэффициент индекса текущей ячейки
  let moving = 0
  const res: number[][] = arr

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = arr.length - 2; j >= 0; j--) {
      k = 1
      n = 0
      if (arr[i][j + 1] === 0 && arr[i][j]) moving++
      while (res[i][j + k] === 0 || arr[i][j + k] === arr[i][j + n]) {
        res[i][j + k] = arr[i][j + k] + arr[i][j + n]
        if (res[i][j + k] === arr[i][j + n] * 2 || res[i][j + k] === arr[i][arr.length - 1] * 2) {
          z += res[i][j + k]
        }
        res[i][j + n] = 0
        k++
        n++
        if (j + k > arr.length - 1) break
      }
    }
  }

  if (moving > 0) return { board: createCell(res), score: z }
  else return { board: res, score: z }
}

export const Game2048Page: React.FC = () => {
  const sm = useMediaQuery(({ breakpoints: { down } }: Theme) => down(600))
  const navigate = useNavigate()
  const dispatch: Dispatch = useReduxDispatch()
  const { touch, watch: touchWatch } = useTouchDetect('touch')
  const { press, watch: pressWatch } = usePressDetect()
  const { data: board, score } = useReduxSelector((state) => state.board2048)
  const [gameStatusEnd, setGameStatusEnd] = useState<{ success: boolean; failure: boolean }>({
    success: false,
    failure: false,
  })

  const onExitGames = () => {
    dispatch(reset())
    navigate('../')
  }

  const initRandomBoard = () => {
    const initBoard: number[][] = createCell(createCell(defaultBoard))
    dispatch(update({ board: initBoard, score: 0 }))
  }

  const statusGame = (arr: number[][], move: { board: number[][]; score: number }) => {
    if (!gameStatusEnd.failure && !gameStatusEnd.success) {
      dispatch(update(move))
      if (gameOver(arr) === GAMESTATUS.FAILURE) {
        setGameStatusEnd({ ...gameStatusEnd, failure: true })
      } else if (gameOver(arr) === GAMESTATUS.SUCCESS) {
        setGameStatusEnd({ ...gameStatusEnd, success: true })
      }
    }
  }

  const onMove = (keyDetect: string): void => {
    switch (keyDetect) {
      case KEYMOVE.UP:
        statusGame(board, moveUp(board, score))
        break
      case KEYMOVE.DOWN:
        statusGame(board, moveDown(board, score))
        break
      case KEYMOVE.LEFT:
        statusGame(board, moveLeft(board, score))
        break
      case KEYMOVE.RIGHT:
        statusGame(board, moveRight(board, score))
        break
      default:
        break
    }
  }

  useEffect(() => {
    initRandomBoard()
  }, [])

  useEffect(() => {
    if (touch) onMove(touch)
  }, [touchWatch])

  useEffect(() => {
    if (press) onMove(press)
  }, [pressWatch])

  return (
    <Grid container justifyContent="center" alignItems="center" width="100vw" height="100vh">
      <Grid item>
        <Zoom in timeout={{ enter: 300 }}>
          <Box>
            <Grid container justifyContent="space-between" alignItems="center" mb={sm ? 3 : 4}>
              <Grid item>
                <Box fontSize={sm ? 45 : 53} fontWeight={600} color="#303030" mb={1}>
                  2048
                </Box>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item>
                    <Button color="primary" variant="contained" onClick={initRandomBoard}>
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
                <Box
                  textAlign="center"
                  p={sm ? '12px' : 2}
                  width={60}
                  fontSize={sm ? 20 : 26}
                  fontWeight={600}
                  lineHeight={1}
                  color="#303030"
                  bgcolor="rgba(48, 48, 48, 0.2)"
                  borderRadius={1}
                >
                  {score}
                </Box>
              </Grid>
            </Grid>
            <Box id="touch">
              <Board board={board} />
            </Box>
            <Box
              textAlign="center"
              height={sm ? 45 : 75}
              fontSize={sm ? 28 : 35}
              fontWeight={500}
              color="#303030"
              mt={sm ? 4 : 5}
            >
              {gameStatusEnd.success && <>Funny game over!</>}
              {gameStatusEnd.failure && <>Fail game over!</>}
            </Box>
          </Box>
        </Zoom>
      </Grid>
    </Grid>
  )
}
