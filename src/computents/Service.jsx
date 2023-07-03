import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imgme1 from '../assets/service.png' 
import imgme2 from '../assets/service2.png' 
import imgme3 from '../assets/service3.jpg' 
import imgme4 from '../assets/service4.png' 

const Service = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (in milliseconds)
          once: true, // Whether to only animate elements once
        });
      }, []);
    return (
        <div id='services'>
            <h2 className=' text-5xl  font-bold mt-[-120px] pb-7'>My services</h2>
            <div className="flex flex-col md:flex-row  items-center  justify-around  bg-slate-300 rounded">
      <div   data-aos="zoom-in-right" className="  ">
      <div className=' w-48  shadow-2xl p-6'>
      <img 
      
      src={imgme1}
      alt="Image"
      className=" ml-3 mb-2 w-32 h-32 rounded-full align-middle"
    />
    <p> Provide fully dynamic website with font-end and back-end</p>
      </div>
      </div>
      <div  data-aos="zoom-in" className=" ">
      <div className=' w-48 shadow-2xl p-6 '>
      <img 
      
      src={imgme2}
      alt="Image"
      className=" ml-3 mb-2 w-32 h-32 rounded-full align-middle"
    />
    <p> Provide fully dynamic website with all device responsive by react.js</p>
      </div>
      </div>
      <div data-aos="zoom-in" className=" ">
      <div className=' w-48 shadow-2xl p-6'>
      <img 
      
      src={imgme3}
      alt="Image"
      className=" ml-3 mb-2 w-32 h-32 rounded-full align-middle"
    />
    <p> Provide fully dynamic website with JavaScripts and CSS</p>
      </div>
      </div>
      <div  data-aos="zoom-in-left" className=" ">
      <div className=' w-48 shadow-2xl p-6'>
      <img 
      
      src={imgme4}
      alt="Image"
      className=" ml-3 mb-2 w-32 h-32 rounded-full align-middle"
    />
    <p> Provide fully dynamic website with converting figma to website </p>
      </div>
      </div>
      
    </div> 
        </div>
    );
};

export default Service;