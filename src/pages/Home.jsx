import React from 'react'
import { Alert } from 'flowbite-react'
import Homeslider from '../conponents/Home-slider'
import HomeAbout from '../conponents/HomeAbout'
import HomeService from '../conponents/HomeService'
import SubHero from '../conponents/subHero'

const Home = () => {
  return (
    <div>
    
   <Homeslider/>
   <SubHero />
   <HomeAbout />
   <HomeService />
    
    </div>
  )
}

export default Home
