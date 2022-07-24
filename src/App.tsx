import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Main from './pages/MainPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="auth" element={<Auth />} />
      <Route path="main" element={<Main />} />
    </Routes>
  )
}

export default App
