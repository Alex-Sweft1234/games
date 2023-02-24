import { useEffect, useState } from 'react'
import { KEYMOVE } from '../types'

export function touchDetect(distX: number, distY: number): string {
  let detect = 'none'
  const xy = Math.abs(distX / distY)
  const yx = Math.abs(distY / distX)
  const limit = Math.tan(((45 * 1.5) / 180) * Math.PI)
  const pageWidth = window.innerWidth || document.body.clientWidth
  const threshold = Math.max(1, Math.floor(0.01 * pageWidth))

  if (Math.abs(distX) > threshold || Math.abs(distY) > threshold) {
    if (yx <= limit) {
      if (distX < 0) detect = KEYMOVE.LEFT
      else detect = KEYMOVE.RIGHT
    }
    if (xy <= limit) {
      if (distY < 0) detect = KEYMOVE.UP
      else detect = KEYMOVE.DOWN
    }
  } else detect = KEYMOVE.TAP

  return detect
}

export function useTouchDetect(touchElement: string) {
  const [detectWatch, setDetectWatch] = useState<{ touch: string | undefined; watch: number }>({
    touch: undefined,
    watch: 0,
  })

  useEffect(() => {
    let startX = 0
    let startY = 0
    const touch = document.getElementById(touchElement) as HTMLElement

    touch.addEventListener('touchstart', (e: TouchEvent) => {
      startX = e.changedTouches[0].clientX
      startY = e.changedTouches[0].clientY
    })

    touch.addEventListener('touchend', (e: TouchEvent) => {
      const distX = e.changedTouches[0].clientX - startX
      const distY = e.changedTouches[0].clientY - startY
      setDetectWatch({ touch: touchDetect(distX, distY), watch: new Date().valueOf() })
    })
  }, [])

  return detectWatch
}
