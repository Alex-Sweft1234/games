import './styles/app.scss'
import 'react-toastify/dist/ReactToastify.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { App } from './app/app'
import { store } from './store'
import { theme } from './theme'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
)

serviceWorkerRegistration.register()
