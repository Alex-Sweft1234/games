import { Dispatch } from 'redux'
import { RESET_BOARD, UPDATE_BOARD } from './types'

export const update = (payload: { board: number[][]; score: number }) => {
  return {
    type: UPDATE_BOARD,
    payload,
  }
}

export const reset = () => {
  return {
    type: RESET_BOARD,
  }
}
