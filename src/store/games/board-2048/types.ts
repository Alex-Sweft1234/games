export type BoardProps = {
  data: number[][]
  score: number
}

export const UPDATE_BOARD = 'UPDATE_BOARD'
export const RESET_BOARD = 'RESET_BOARD'

interface Update {
  type: typeof UPDATE_BOARD
  payload: any
}

interface Reset {
  type: typeof RESET_BOARD
  payload: any
}

export type BOARD = Update | Reset
