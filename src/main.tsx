import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import LoaderWrapper from './components/Loader'
import './index.css'
import { ToastProvider } from './customHooks/useToast'
import { AuthProvider } from './customHooks/useAuth'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ToastProvider>
      <AuthProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthProvider>
    </ToastProvider>
  </BrowserRouter>
)
