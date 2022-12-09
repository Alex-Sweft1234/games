import React, { useEffect } from 'react'
import { RoutesRoot } from './routes'

export const App: React.FC = (): JSX.Element => {
  useEffect(() => {
    let displayMode = 'browser tab'
    if (window.matchMedia('(display-mode: standalone)').matches) {
      displayMode = 'standalone'
    }
    console.log('DISPLAY_MODE_LAUNCH:', displayMode)
  }, [])
  return <RoutesRoot />
}
