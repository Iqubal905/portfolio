import React from 'react';

import Banner from '../computents/Banner';
import About from '../computents/About';
import Service from '../computents/Service';
import WavifyAnimation from '../computents/WavifyAnimation';
import Project from '../computents/Project';

import ContactForm from '../computents/ContactForm';
import Contact from '../computents/Contact';
import ScrollComponent from '../computents/ScrollCompunent';

import NavigationMenu from '../computents/NavigationMenu';
import SkillBar from '../computents/SkillBar ';
import Footer from '../computents/Footer';


const Home = () => {
    

    return (
        <div className=''>
        
<NavigationMenu></NavigationMenu>
<Banner></Banner>
<WavifyAnimation></WavifyAnimation>
<About></About>
      
      
<WavifyAnimation></WavifyAnimation>
        <Service></Service>
        <WavifyAnimation></WavifyAnimation>
        <SkillBar></SkillBar>
        <WavifyAnimation></WavifyAnimation>
        <Project></Project>
        <WavifyAnimation></WavifyAnimation>
        
        <ContactForm></ContactForm>
        <ScrollComponent></ScrollComponent>
       
  <Footer></Footer>
        </div>
    );
};

export default Home;