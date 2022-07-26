import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Toast from './components/Toast'
import Auth from './pages/Auth'
import ImageUploader from './pages/ImageUploader'
import Main from './pages/MainPage'


function App() {
  return (
    <div>
      <Toast />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="auth" element={<Auth />} />
        <Route path="main" element={<Main />} />
        <Route path="imageupload" element={<ImageUploader />} />
      </Routes>
    </div>
  )
}

export default App
