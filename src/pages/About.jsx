import React from 'react'

import AboutUs_Welcome from '../Conponents/AboutUs_Welcome'
import PageBanner from '../Conponents/PageBanner'
import about from "../assets/about-us.jpg.jpeg"
import AboutUs_M_V from '../Conponents/AboutUs_M&V'
import AboutUs_Values from '../Conponents/AboutUs_Values'
import WhyChooseUs from '../Conponents/AboutUs_WhyChoose'
import Stats from '../Conponents/AboutUs_Counter'
import AboutUs_Doctors from '../Conponents/AboutUs_Doctors'

const About = () => {
  return (
    <div>
      <PageBanner  title={"About Us"} image={about} />
      <AboutUs_Welcome />
      <AboutUs_M_V />
      <AboutUs_Values />
      <WhyChooseUs />
      <Stats />
      <AboutUs_Doctors />
    </div>
  )
}

export default About
