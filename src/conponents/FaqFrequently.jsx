import React from 'react'
import FaqImg from "../assets/FaqSmiling.jpg"
import { Link } from 'react-router-dom'


const FaqFrequently = () => {
  return (
    <div  className='m-20 grid md:grid-cols-2 gap-20'>
      <section>
       <div>
         <h1 className='text-3xl md:text-4xl font-bold mt-20 mb-10 '>Frequently Asked Questions</h1>
         <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus, primis in orci integer metus mollis faucibus enim. Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit magna purus pretium gravida donec ligula massa gravida donec pretium</p>
       </div>
       <div>
         <h1  className='font-bold text-blue-400 text-2xl mt-10 mb-10'>1. General Questions</h1>
         <h3 className="mb-6 text-xl font-bold">Is porta semper MedService primis?   </h3>
         <p className='mb-3'>Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae auctor eros dolor luctus odio tempor sapien gravida donec pretium and ipsum porta</p>
         <h4 className="mb-3 text-xl font-bold border-t">How feugiat primis ultrice in ligula?</h4>
         <h4 className="mb-3 text-xl font-bold border-t">Did donec pretium and MedService porta?</h4>
         <h4 className="mb-3 text-xl font-bold border-t">What is metus mollis faucibus?</h4>
       </div>
       <div>
         <h1 className='font-bold text-blue-400 text-2xl mt-10 mb-10'>2. Medical Treatment Questions</h1>
         <h3 className="mb-3 text-xl font-bold border-b py-3">How much congue magna nihil impedit ligula risus?</h3>
         <h3 className="mb-3 text-xl font-bold border-b py-3">What I congue magna nihil convallis porta?</h3>
         <h3 className="mb-3 text-xl font-bold border-b py-3">Is there a aliquet elementum massa?</h3>
         <h3 className="mb-3 text-xl font-bold border-b py-3">Can I auctor eros dolor luctus odio placerat massa magna?</h3>
         <h3 className="mb-3 text-xl font-bold border-b py-3">Do you have vehicula magna luctus tempor?</h3>
       </div>
       <div>
         <h1 className='font-bold text-blue-400 text-2xl mt-10 mb-10' >3. Emergency Help Questions</h1>
         <h3 className="mb-3 text-xl font-bold border-b py-3">I have tempor sapien gravida?</h3>
         <h3 className="mb-3 text-xl font-bold border-b py-3">I want molestie bibendum quis, aliquet?</h3>
         <h3 className="mb-3 text-xl font-bold border-b py-3">Can I tincidunt tincidunt massa, et porttitor?</h3>
       </div>
     </section>
         
     <section>
          <h3  className='font-bold text-2xl mb-4  border-b py-5'>The Heart Of Clinic</h3>
        <div className=' flex flex-row py-2 gap-5'>
          <div>
           <img src={FaqImg} className='h-50 w-40' alt="Faqimg" />  
          </div>
          <div className='mt-10'>
            <h4 className='font-semibold text-2xl mb-2'> Dr. jonathan Barnes</h4>
            <p>Chief Medical Officer, Founder</p>
            <h2 className='font-bold text-blue-400 text-3xl'>1-800-1234-567</h2>
          </div>
        </div>
        <p className='py-2'>An enim nullam tempor sapien at gravida donec <br /> pretium ipsum porta justo integer at odiovelna vitae <br /> auctor integer congue magna purus</p>
        <button className='bg-blue-400 rounded p-3 text-white'>Learn More</button>
         <div className="bg-blue-400 p-10 text-white rounded-lg mt-10 w-90">
                   <div>
                        <h3 className='text-2xl font-bold mb-6'>Working Time</h3>
    <p className='mb-8 text-white/90'>
       Porta semper lacus cursus, feugiat primis ultrice ligula risus auctor at tempus feugiat dolor lacinia cursus nulla vitae massa
    </p>
                   </div>
       <div className='space-y-6'>
       <div className='flex justify-between border-b-2 border-dotted border-white/30 pb-4'>
    
               <span>Mon – Wed	</span>
               <span>-</span>	
               <span>9:00 AM - 7:00 PM</span>
               
       </div>
            <div className='flex justify-between border-b-2 border-dotted border-white/30 pb-4'>
               <span> Thursday</span>	
               <span>-</span>	
               <span>9:00 AM - 6:30 PM</span>
    
            </div>

           <div className='flex justify-between border-b-2 border-dotted border-white/30 pb-4'>
                <span>Friday</span> 
                <span>-</span>	
                <span>9:00 AM - 6:00 PM</span>
    
                
           </div>
            <div className='flex justify-between pb-4'>
                <span> Sun</span>	
                <span>-</span>	
                <span>CLOSED</span>
          
    
            </div>
            <h3 className='text-1xl font-bold mb-6'>Need a personal health plan?</h3>
            <p className='mt-2'>Porta semper lacus cursus, and feugiat primis ultrice ligula at risus auctor</p>
       </div>


         

                  </div>

                  <div className='border rounded mt-10 p-8 w-85'>
          <h2  className='font-bold text-2xl mb-4 py-5' >Doctors Timetable</h2>
          <p>Porta semper lacus cursus, feugiat primis <br /> ultrice ligula risus auctor at tempus feugiat <br /> dolor lacinia cursus nulla vitae massa</p>
           <button className='bg-blue-400 rounded p-3 mt-5 text-white'>View Timetable</button>
         </div>
     </section>
    </div>
  )
}

export default FaqFrequently
