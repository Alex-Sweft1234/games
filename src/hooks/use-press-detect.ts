import { useEffect, useState } from 'react'
import { KEYMOVE } from '../types'

export function usePressDetect() {
  const [detectWatch, setDetectWatch] = useState<{ press: string | undefined; watch: number }>({
    press: undefined,
    watch: 0,
  })

  useEffect(() => {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      switch (event.key) {
        case KEYMOVE.UP:
          setDetectWatch({ press: KEYMOVE.UP, watch: new Date().valueOf() })
          break
        case KEYMOVE.DOWN:
          setDetectWatch({ press: KEYMOVE.DOWN, watch: new Date().valueOf() })
          break
        case KEYMOVE.LEFT:
          setDetectWatch({ press: KEYMOVE.LEFT, watch: new Date().valueOf() })
          break
        case KEYMOVE.RIGHT:
          setDetectWatch({ press: KEYMOVE.RIGHT, watch: new Date().valueOf() })
          break
        case KEYMOVE.SHIFT:
          setDetectWatch({ press: KEYMOVE.SHIFT, watch: new Date().valueOf() })
          break
        case KEYMOVE.CTRL:
          setDetectWatch({ press: KEYMOVE.CTRL, watch: new Date().valueOf() })
          break
        case KEYMOVE.BACKSPACE:
          setDetectWatch({ press: KEYMOVE.BACKSPACE, watch: new Date().valueOf() })
          break
        default:
          break
      }
    })
  }, [])

  return detectWatch
}
