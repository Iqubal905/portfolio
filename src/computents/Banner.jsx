import React, { useEffect, useState } from 'react';
import img from '../assets/portfolio.jpg'
import '../computents/Banner.css'
import Contact from './Contact';
const Banner = () => {


    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    
    const message = "I'am Iqbal Hussain"; // The text you want to display
    const message2 = "I'm MERN stack developer"; // The text you want to display
  
    useEffect(() => {
      let currentIndex = 0;
      let interval;
  
      const animateText = () => {
        setText(message.substring(0, currentIndex));
        currentIndex++
        // if (currentIndex === message.length) {
        //   setTimeout(() => {
        //     setText('');
        //     currentIndex = 0;
        //   }, 5000); // Delay before restarting the animation (adjust as needed)
        // } else {
        //   currentIndex++;
        // }
      };
  
      interval = setInterval(animateText, 100); // Delay between each letter (adjust as needed)
  
      return () => {
        clearInterval(interval);
      };
    }, []);


    useEffect(() => {
        let currentIndex2 = 0;
        let interval;
    
        const animateText = () => {
            setText2(message2.substring(0, currentIndex2));
    
          if (currentIndex2 === message2.length) {
            setTimeout(() => {
              setText2('');
              currentIndex2 = 0;
            }, 500); // Delay before restarting the animation (adjust as needed)
          } else {
            currentIndex2++;
          }
        };
    
        interval = setInterval(animateText, 100); // Delay between each letter (adjust as needed)
    
        return () => {
          clearInterval(interval);
        };
      }, []);
  


      const [currentColor, setCurrentColor] = useState('red');

      useEffect(() => {
        const interval = setInterval(changeColor, 1000); // Change color every second
        return () => clearInterval(interval); // Clean up the interval on component unmount
      }, []);
    
      const changeColor = () => {
        setCurrentColor(getRandomColor());
      };

      
      const getRandomColor = () => {
        const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      };



      const [currentColor2, setCurrentColor2] = useState('red');

      useEffect(() => {
        const interval = setInterval(changeColor2, 2000); // Change color every second
        return () => clearInterval(interval); // Clean up the interval on component unmount
      }, []);
    
      const changeColor2 = () => {
        setCurrentColor2(getRandomColor2());
      };

      
      const getRandomColor2 = () => {
        const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      };



    return (
        <div id='banner' className=' '>
         
            <div className="relative">
      <img src={img} className="w-full  h-custom"  />

      {/* Shade Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text */}

      <div className="absolute inset-0 flex items-center justify-center">
      <div>
      <h1 style={{ color: currentColor }} className="text-white text-4xl font-bold  text-center h-12">{text}</h1>
      <h1 style={{ color: currentColor2 }} className="text-white text-4xl font-bold  text-left h-12">{text2}</h1>
        <Contact></Contact>
      </div>
      </div>
    
    </div>
        </div>
    );
};

export default Banner;