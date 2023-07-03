import React from 'react';
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";

import { animateScroll } from 'react-scroll';
import '../computents/ScrollComputent.css'
const ScrollComponent = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 2000, // Adjust the duration (in milliseconds) as needed
      smooth: true,
    });
  };

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      duration: 2000, // Adjust the duration (in milliseconds) as needed
      smooth: true,
    });
  };

  return (
    <div className='scroll '>
       
      <button  className='  text-4xl' onClick={scrollToTop}><BsFillArrowUpCircleFill></BsFillArrowUpCircleFill></button>
      <br ></br>
      <button className='  text-4xl' onClick={scrollToBottom}> <BsFillArrowDownCircleFill></BsFillArrowDownCircleFill></button>
      {/* Rest of the content */}
    </div>
  );
};

export default ScrollComponent;
