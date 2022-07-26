import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { CommonContextProvider } from './state/Commoncontext'
import { ToastContextProvider } from './state/Toastcontext'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ToastContextProvider>
      <CommonContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CommonContextProvider>
    </ToastContextProvider>
  </BrowserRouter>
)
