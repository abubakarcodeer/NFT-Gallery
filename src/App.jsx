import React from 'react'
import "./App.css"
import Navbar from './components/NavBar/Navbar'
import Landing from './components/Landing/Landing'
import { Discover } from './pages/Discover'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { Detail } from './components/Detail/Detail'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      <div className="body-bg-shape"></div>
    </div>
  )
}

export default App