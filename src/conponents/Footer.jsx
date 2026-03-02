import React from 'react'
import LightLogo from "../assets/ourfriend-light.png"
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaArrowUp} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className='container mx-auto px-6 py-12 grid md:grid-cols-4 gap-10'>
        {/* logo, about and icon */}
        <section>
          <img src={LightLogo} className='h-20' alt="Light-Logo" />
          <p className='text-sm leading-relaxed mb-5'>OurFriend hospital is a state of the art medical facilities that believes in the power of diagonisis before treatment</p>

          <div className='flex gap-3'>
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube ].map((Icon, i) =>(
              <span key={i}className='border rounded-full p-3 hover:bg-blue-500 hover:text-black transition cursor-pointer'>
                <Icon size={14} />

              </span>
            ))}
          </div>
        </section>

        <section>
        <h4 className='text-lg mb-4 font-semibold'>Our Location</h4>
        <p className='mb-2'>10 Adepitan st, ojodu, lagos 101232,lagos</p>
        <p className='mb-2'>E: info@ourfriendhospital.com</p>
        <p className='mb-2'>P: +234 8023 311 868</p>

        </section>

         <section>
         <h4 className='font-semibold'>ABOUT</h4>
         <ul className='space-y-2'>
             <li> <a href='/about'>About OHF </a> </li>
             <li> <a href='/about'>Careers </a></li>
             <li> <a href='/about'>Blog </a></li>
             <li> <a href='/hmo'>HMO </a></li>

         </ul>
        </section>

         <section>
          <h4 className='font-semibold'>Discover</h4>
         <ul className='space-y-2'>
             <li>Help Center</li>
             <li>Termsg & Privacy</li>
             <li>FAQs</li>
             <li>Sitemaps</li>

         </ul>
        </section>



      </div>

    {/* Buttom footer */}
    <div className=' container mx-auto border-t px-6 py-5 flex justify-between items-center text-sm'>
     <p>&copy;{new Date().getFullYear()}Our Friend Hospital. All Right Reserved</p>

     <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className='bg-gray-200 text-white rounded-full p-3 hover:bg-amber-600 hover:text-black transition'>
      <FaArrowUp/>
     </button>
    </div>


    </footer>
  )
}

export default Footer
