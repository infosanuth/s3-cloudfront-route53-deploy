import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home
