import { BOARD, UPDATE_BOARD, BoardProps, RESET_BOARD } from './types'

const initialState = {
  data: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  score: 0,
}

export const BoardReducer = (state: BoardProps = initialState, action: BOARD): BoardProps => {
  const { type, payload } = action

  switch (type) {
    case UPDATE_BOARD:
      return { data: payload.board, score: payload.score }
    case RESET_BOARD:
      return { data: initialState.data, score: 0 }
    default:
      return state
  }
}
