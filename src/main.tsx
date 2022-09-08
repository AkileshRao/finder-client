import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import LoaderWrapper from './components/Loader'
import './index.css'
import { ToastProvider } from './customHooks/useToast'
import { AuthProvider, useAuth } from './customHooks/useAuth'
import { LoaderProvider } from './customHooks/useLoader'
import axios from 'axios'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <LoaderProvider>
      <ToastProvider>
        <AuthProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </AuthProvider>
      </ToastProvider>
    </LoaderProvider>
  </BrowserRouter>
)
