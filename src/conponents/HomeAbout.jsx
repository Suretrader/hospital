import React from 'react'
import aboutImg from "../assets/image2.png"
const HomeAbout = () => {
  return (
    <div className='flex justify-center items-center bg-gray-200 pt-20 flex-col md:flex-row'>
      <section className='flex-1'>
        <img src={aboutImg} alt="" width="100%" className='mx-auto' />
      </section>
      <section className='flex-1 p-20'>
       <h5 className='uppercase font-semibold text-blue-400 text-sm mb-2'> WELCOME TO OUR FRIEND HOSPITAL
</h5>
<h2 className='text-gray-600 mb-6 text-3xl md:text-4xl'>Complete Medical Care You Can Trust</h2>
<p className='text-gray-700 mb-6'>
   At Our Friend Hospital, we provide comprehensive and compassionate healthcare services for individuals and families. Our experienced medical team combines advanced technology with personalized care to ensure accurate diagnosis, effective treatment, and a smooth recovery process. Your health, comfort, and well-being are always our top priorities.
</p>
<p className='text-gray-800 font-medium mb-4'>Dr. Isa Muhammed, Medical Director</p>


      </section>
    </div>
  )
}

export default HomeAbout
