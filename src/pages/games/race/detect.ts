import PIXI from 'pixi.js'
import { KEYMOVE } from '../../../types'
import { leftCarMove, rightCarMove, continueGame, stopGame, startGame } from './pixi-app'

export const onMoveKeyboard = (app: PIXI.Application, onStopGame: () => void): void => {
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    switch (event.key) {
      case KEYMOVE.LEFT:
        leftCarMove(app)
        break
      case KEYMOVE.RIGHT:
        rightCarMove(app)
        break
      case KEYMOVE.BACKSPACE:
        startGame(app, onStopGame)
        break
      case KEYMOVE.SHIFT:
        continueGame(app)
        break
      case KEYMOVE.CTRL:
        stopGame(app)
        break
      default:
        break
    }
  })
}
