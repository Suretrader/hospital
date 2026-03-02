import React from 'react'
import FaqImg from "../assets/FaqSmiling.jpg"
import { Link } from 'react-router-dom'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";


const FaqFrequently = () => {
  return (
    <div  className='m-20 grid grid-cols-3 gap-20'>
      <section className='col-span-2'>
       <div>
         <h1 className='text-3xl md:text-4xl font-bold mt-20 mb-10 '>Frequently Asked Questions</h1>
            <h2 className='font-bold text-2xl'>Do you speak my language?</h2>
       <p>We offer Free Interpretation Services for over 200 languages via video and phone. Simply point to your language on our Language Identification Poster at any reception desk.</p>
       </div>
       <div>
         <h1  className='font-bold text-blue-400 text-2xl mt-10 mb-10'>1. General Questions</h1>
        <Accordion>
           <AccordionPanel>
        <AccordionTitle className='font-bold text-1xl'>What should I bring?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
         Bring photo ID, insurance card, medication list, and relevant records.          </p>
          
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle className='font-bold text-1xl'>Medical records?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Complete a release form via our Medical Records Department (allow 7-10 days).          </p>
        
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle className='font-bold text-1xl'>What are the hospital’s operating hours?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
         While most hospitals are open 24/7 for emergencies, specify the hours for regular outpatient clinics and administrative offices (e.g., Mon–Fri, 8:00 am – 5:00 pm).          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle className='font-bold text-1xl'>Where is the hospital located?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
         10 Adepitan st, ojodu, lagos 101232,lagos

          </p>
        
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
       </div>
       <div>
         <h1 className='font-bold text-blue-400 text-2xl mt-10 mb-10'>2. Medical Treatment Questions</h1>
         <Accordion>
           <AccordionPanel>
        <AccordionTitle className='font-bold text-1xl'>Why do I need this specific test?
          </AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Explain that tests like blood work, X-rays, or CT scans help the doctor confirm a diagnosis, rule out other conditions, or monitor how well a current treatment is working.          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle className='font-bold text-1xl'>What should I do to prepare for my test?
</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Common instructions include fasting (no food or drink) for 8–12 hours, stopping certain medications, or arriving with a full bladder.          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle className='font-bold text-1xl'>How and when will I get my results?
       </AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Most results are available within 24–48 hours, though specialized labs may take longer. Patients can often access them via an online patient portal or during a follow-up call.          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle className='font-bold text-1xl'>What does an "abnormal" result mean?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            An abnormal result doesn't always mean something is wrong; it may require a repeat test or further investigation to understand its significance in the context of your overall health.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
           sometimes its wrong
          </p>
          
          
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle className='font-bold text-1xl'>What are all these tubes and machines for?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
           Encourage patients to ask their nurse to explain the purpose of IV lines, monitors, and oxygen equipment to reduce anxiety.          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
           READ THE FIRST PARAGRAPH AGAIN
          </p>
          
          
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
     </div>
       <div>
         <h1 className='font-bold text-blue-400 text-2xl mt-10 mb-10' >3. Emergency Help Questions</h1>
        <Accordion>
           <AccordionPanel>
        <AccordionTitle className='font-bold text-1xl'>What tests are being ordered and why?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
           Understand the purpose of every X-ray, blood draw, or scan to stay informed about your care plan.        </p>
        </AccordionContent>
      </AccordionPanel>
           <AccordionPanel>
        <AccordionTitle className='font-bold text-1xl'>What is the most likely cause of my symptoms?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
           Ask for both the primary diagnosis and any "differential" (alternative) possibilities the doctor is ruling out.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle className='font-bold text-1xl'>What are the 'red flags' I should watch for after I leave?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Before discharge, ask which specific symptoms mean you must return to the ER immediately. 
          </p>
          <p className="text-gray-500 dark:text-gray-400">
          WATCH YOUR WEIGHT TOO
          </p>
        </AccordionContent>
      </AccordionPanel>
      
    </Accordion>
       </div>
     </section>
         
     <section className='col-span-1'>
          <h3  className='font-bold text-2xl mb-4  border-b py-5'>The Heart Of Clinic</h3>
        <div className=' flex flex-row py-2 gap-5'>
          <div>
           <img src={FaqImg} className='h-50 w-40' alt="Faqimg" />  
          </div>
          <div className='mt-10'>
            <h4 className='font-semibold text-2xl mb-2'> Dr. jonathan Barnes</h4>
            <p>Chief Medical Officer, Founder</p>
            <h2 className='font-bold text-blue-400 text-2xl'>1-800-1234-567</h2>
          </div>
        </div>
        <p className='py-2'>Dr. Jenkins is a board-certified pediatrician with over 12 years of experience in newborn care and adolescent wellness. He believes in a family-centered approach to medicine, focusing on preventive health and open communication with parents to ensure every child reaches their full potential.</p>
        <button className='bg-blue-400 rounded p-3 text-white'>Learn More</button>
         <div className="bg-blue-400 p-10 text-white rounded-lg mt-10 w-90">
                   <div>
                        <h3 className='text-2xl font-bold mb-6'>Working Time</h3>
    <p className='mb-8 text-white/90'>
At Our Hospital, we provide care around the clock. While our Emergency Department is open 24/7, 365 days a year.    </p>
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
            <p className='mt-2'>Rotate your health plans with weather updates, clinic news, or relaxing nature loops to prevent "screen fatigue</p>
       </div>


         

                  </div>

                  <div className='border rounded mt-10 p-8 w-85'>
          <h2  className='font-bold text-2xl mb-4 py-5' >Doctors Timetable</h2>
          <p>Our specialists are available for consultations Monday through Friday from 8:00 AM to 5:00 PM, with extended evening clinics on Tuesdays and Thursdays. Saturday sessions are reserved for pre-booked follow-ups and wellness screenings between 9:00 AM and 1:00 PM. For immediate medical needs outside these hours</p>
           <button className='bg-blue-400 rounded p-3 mt-5 text-white'>View Timetable</button>
         </div>
     </section>
    </div>
  )
}

export default FaqFrequently
