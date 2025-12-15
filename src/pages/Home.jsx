import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import Landing from '../components/Landing/Landing'
import { Discover } from '../pages/Discover'
import "../App.css"
const Home = () => {
  return (
   <div className='main-container'>
      <Navbar />
      <Landing />
      <Discover/>
    </div>
  )
}

export default Home