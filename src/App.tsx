import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Loader from './components/Loader'
import Toast from './components/Toast'
import useLoader from './customHooks/useLoader'
import Auth from './pages/Auth'
import ImageUploader from './pages/ImageUploader'
import Main from './pages/Main'
import { useToast } from './customHooks/useToast'
import Matches from './pages/Matches'
import { ProfileImageProvider } from './customHooks/useProfileImage'
import { ProfilesProvider } from './customHooks/useProfiles'


function App() {
  return (
    <div>
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
