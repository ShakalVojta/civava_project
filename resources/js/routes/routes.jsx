import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import HomePage from '../pages/Home/HomePage'
import AboutPage from '../pages/About/AboutPage'

const AppRoutes = () => {
  return (
    <Routes>
    <Route element={<MainLayout />}>
      <Route path='/' element={<HomePage />} />    
      <Route path='/about' element={<AboutPage />} />
    </Route>
  </Routes>
  )
}

export default AppRoutes
