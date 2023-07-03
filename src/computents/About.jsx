import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imgme from '../assets/image.jpg' 
const About = () => {

useEffect(() => {
  AOS.init({
    duration: 1000, // Animation duration (in milliseconds)
    once: true, // Whether to only animate elements once
  });
}, []);

    return (
        <div id='about' className=''>
          <div>
            <h2 className=' text-5xl  font-bold mt-[-120px] pb-7'>About me</h2>
          </div>
            <div className="flex flex-col md:flex-row  items-center justify-center  bg-slate-300 rounded">
      <div className="md:w-72 ">
        <img 
        data-aos="fade-right"
          src={imgme}
          alt="Image"
          className="w-full h-auto rounded-l md:rounded-l-none md:rounded-t"
        />
      </div>
      <div className="p-4  md:w-96  shadow-xl " data-aos="fade-left">
        <h2 className="text-2xl md:ml-4 font-bold mb-2">Iqbal Hussain</h2>
        <p className="mb-4 md:ml-4  text-justify  font-semibold">
         I am a dedicated professional who recently completed my MBS (Master of Business Studies) from National University. I also have a strong foundation in web development, particularly in the MERN 
         (MongoDB, Express.js, React.js, Node.js) stack, which I acquired through a comprehensive course from Programming Hero
        </p>
        <p className="mb-4 md:ml-4 text-justify font-semibold">
        Committed to continuous learning and staying up-to-date with the latest technologies.
         Dedicated to contributing my skills and expertise to impactful projects.
          
        </p>
       
      </div>
    </div> 
        </div>
    );
};

export default About;