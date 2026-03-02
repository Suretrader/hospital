import React from 'react'
import FaqImg from "../assets/about-us.jpg.jpeg"
import FaqBanner from '../Conponents/FaqBanner'
import FaqFrequently from '../conponents/FaqFrequently'


const Faq = () => {
  return (
    <div>
      <FaqBanner  title={"FAQs"} image={FaqImg} />
      <FaqFrequently />
    </div>
  )
}

export default Faq
