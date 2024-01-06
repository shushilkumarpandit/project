import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './src/Components/Navbar'

const MyRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/entertainment' element={<Navbar cate="entertainment"/>}/>
        <Route path='/sports' element={<Navbar cate="sports"/>}/>
        <Route path='/science' element={<Navbar cate="science"/>}/>
        <Route path='/music' element={<Navbar cate="music"/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default MyRoutes