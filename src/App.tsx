import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Loader from './components/Loader'
import Toast from './components/Toast'
import { useLoader } from './customHooks/useLoader'
import Auth from './pages/Auth'
import ImageUploader from './pages/ImageUploader'
import Main from './pages/Main'
import Matches from './pages/Matches'
import { ProfileImageProvider } from './customHooks/useProfileImage'
import { ProfilesProvider } from './customHooks/useProfiles'
import axios from 'axios'
import { useAuth } from './customHooks/useAuth'
import { useToast } from './customHooks/useToast'


function App() {
  const { loading } = useLoader()!
  const { isLoggedIn, logout } = useAuth()
  const { addToast } = useToast()!


  useEffect(() => {
    const authInterceptor = axios.interceptors.response.use(undefined, (err) => {
      if (err.response.status == 401) {
        logout();
        addToast("error", "Expired!", "Your session timed out. Please re-login.")
      }
      return Promise.reject(err)
    })

    return () => {
      axios.interceptors.response.eject(authInterceptor)
    }
  }, [loading])
  return (
    <div>
      {loading && <Loader />}
      <ProfileImageProvider>
        <ProfilesProvider>
          <Toast />
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="main" element={<Main />}>
              <Route index element={<Matches />} />
              <Route path="matches" element={<Matches />} />
              <Route path="imageupload" element={<ImageUploader />} />
            </Route>
          </Routes>
        </ProfilesProvider>
      </ProfileImageProvider>
    </div>
  )
}

export default App
