
"use client";

import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
function Homeslider() {
  return (
         <div  className="w-full">
      <Carousel slideInterval={5000} className="h-[80vh] w-full overflow-hidden [&>div]:overflow-hidden">
        {/* slider1 */}
        <div className="flex h-full bg-top  bg-cover items-center justify-center relative bg-gray-400  dark:text-white" style={{backgroundImage:"url('https://images.unsplash.com/photo-1666887360726-f55472d96c34?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') "}}>

         <div className="absolute inset-0  bg-black/40 top-1/5 left-20 h-fit w-1/3 p-5 rounded ">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Health, Our Friend</h1>
            <p className="mb-6 text-lg">Providing compassionate, professional healthcare with a friendly touch.</p>
            <Link to="/appointment" className="inline-block bg-amber-600 hover:bg-blue-500 rounded px-6 py-4">Book Appointment</Link>
        </div>
        </div>
        {/* slider2 */}
        <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" style={{backgroundImage:'url("https://img.freepik.com/premium-photo/doctors-talking-with-patient-hospital_482257-146318.jpg")'}}>
                    <div className="absolute inset-0  bg-black/40 top-1/5 left-[60%] h-fit w-1/3 p-5 rounded ">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Diagnosis Before Treatment</h1>
            <p className="mb-6 text-lg">We go beyond symptoms to find the root cause of your health concerns.</p>
            <Link to="/appointment" className="inline-block bg-amber-600 hover:bg-blue-500 rounded px-6 py-4">Learn About Our Approach</Link>
        </div>
        </div>
        {/* slider3 */}
        <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" style={{backgroundImage: "url('https://img.freepik.com/premium-photo/doctor-clinic-child-with-medical-checkup-consultation-health-wellness-pediatrician-kid-hospital-bed-with-plush-bear-comfort-good-news-healthcare-life-insurance_590464-326597.jpg')"}}>
                  <div className="absolute inset-0  bg-black/40 top-1/5 left-20 h-fit w-1/3 p-5 rounded ">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Holistic Care for Your Well-being</h1>
            <p className="mb-6 text-lg">Caring for your physical, emotional, and mental health.</p>
            <Link to="/appointment" className="inline-block bg-amber-600 hover:bg-blue-500 rounded px-6 py-4">Explore Our Services</Link>
        </div>
          
        </div>
      </Carousel>
    </div>
  );
}
export default Homeslider