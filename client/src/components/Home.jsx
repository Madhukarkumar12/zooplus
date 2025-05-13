import React from 'react'
import Navbar from './Navbar'
import HeroHome from './Herosection/HeroHome'
import HomeChart from './HomeChart'
import HomeTable from './HomeTable'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroHome/>
      <HomeChart/>
      <HomeTable/>
    </div>
  )
}

export default Home
