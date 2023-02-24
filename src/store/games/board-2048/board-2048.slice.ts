import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BoardProps } from './types'

const initialState: BoardProps = {
  board: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  score: 0,
}

export const board2048Slice = createSlice({
  name: '2048',
  initialState,
  reducers: {
    setBoard2048Update(state: BoardProps, action: PayloadAction<BoardProps>) {
      return { board: action.payload.board, score: action.payload.score }
    },
    setBoard2048Reset() {
      return { ...initialState }
    },
  },
  extraReducers: () => {},
})

export const board2048Actions = board2048Slice.actions
export const board2048Reducer = board2048Slice.reducer
