import React from 'react'
import Navbar from './Navbar'
import HeroHome from './Herosection/HeroHome'
import Analytics from './Analytics';
import Camera from './Camera';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroHome/>
      <Analytics/>
      <Camera/>
    </div>
  )
}

export default Home
