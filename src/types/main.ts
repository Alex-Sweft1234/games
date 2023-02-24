export interface IBoard {
  board: number[][]
}

export interface ICell {
  score: number
}

export enum KEYMOVE {
  UP = 'ArrowUp',
  DOWN = 'ArrowDown',
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
  SHIFT = 'Shift',
  CTRL = 'Control',
  BACKSPACE = 'Backspace',
  TAP = 'Pressing',
}

export type GameStatusProps = 'continue' | 'failure' | 'success'

export enum GAMESTATUS {
  CONTINUE = 'continue',
  FAILURE = 'failure',
  SUCCESS = 'success',
}
