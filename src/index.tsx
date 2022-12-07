import './styles/app.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/app'
import store from './store'
import { theme } from './theme'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
)

serviceWorkerRegistration.register();
