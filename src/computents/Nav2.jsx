import React, { useRef } from 'react';

const Nav2 = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <ul>
        <li onClick={() => scrollToSection(homeRef)}>Home</li>
        <li onClick={() => scrollToSection(aboutRef)}>About</li>
        <li onClick={() => scrollToSection(servicesRef)}>Services</li>
        <li onClick={() => scrollToSection(contactRef)}>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav2;