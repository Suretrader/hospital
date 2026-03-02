import React from 'react'
import SlideImg from "../assets/health-Care.jpg";
const SubHero = () => {
  return (
    <div className='py-20'>
            <main className="container mx-auto grid lg:grid-cols-3 gap-10 px-10 items-start">
                 <div >
                  <img src={SlideImg} className="w-full h-64 object-cover" alt="" />
                    <h3 className='mt-6 text-xl font-bold text-gray-800 leading-relaxed'>Best Health Care</h3>
                    <p className='mt-3 text-gray-600 leading-relaxed'>Accurate Diagnosis & Consultation

At Our Friend Hospital, we believe treatment must begin with proper diagnosis. We carefully examine every patient to identify the root cause of illness before prescribing medication. Our consultations are thorough, compassionate, and focused on long-term wellness.</p>
                 </div>
                  <div class="..."><img src={SlideImg} className="w-full h-64 object-cover" alt="" />
                      <h3 className='mt-6 text-xl font-bold text-gray-800 leading-relaxed'>Best Health Care</h3>
                    <p className='mt-3 text-gray-600 leading-relaxed'> Compassionate & Friendly Care

We treat every patient as a friend. Our team provides professional healthcare in a warm and respectful environment. From check-up to recovery, we ensure you feel heard, valued, and supported throughout your healthcare journey</p></div>
                  <div className="bg-blue-500 p-10 text-white rounded-lg shadow-lg">
                   <div>
                        <h3 className='text-2xl font-bold mb-6'>Working Time</h3>
    <p className='mb-8 text-white/90'>
       Our doors are open to provide quality and friendly healthcare services throughout the week. Visit us during the hours below:
    </p>
                   </div>
       <div className='space-y-6'>
       <div className='flex justify-between border-b border-white/30 pb-4'>
    
               <span>Mon – Wed	</span>
               <span>-</span>	
               <span>9:00 AM - 7:00 PM</span>
               
       </div>
            <div className='flex justify-between border-b border-white/30 pb-4'>
               <span> Thursday</span>	
               <span>-</span>	
               <span>9:00 AM - 6:30 PM</span>
    
            </div>

           <div className='flex justify-between border-b border-white/30 pb-4'>
                <span>Friday</span> 
                <span>-</span>	
                <span>9:00 AM - 6:00 PM</span>
    
                
           </div>
            <div className='flex justify-between pb-4'>
                <span> Sun</span>	
                <span>-</span>	
                <span>Closed</span>
    
            </div>

       </div>




                  </div>
            </main>
    </div>
  )
}

export default SubHero
