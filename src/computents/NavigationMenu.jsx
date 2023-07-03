import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './NavigationMenu.css'; // Import the CSS file for styling

const NavigationMenu = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The code for handling the active menu item based on scroll position (as shown in previous responses).
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
    closeMobileMenu();
  };

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 1000,
      smooth: true,
    });
    closeMobileMenu();
  };

  return (
    <nav className={` container  ml-9 navbar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="my-name text-3xl font-bold  text-white ">Iqbal Hussain</div>
      <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={handleToggleMobileMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <Link
            to="banner"
            smooth={true}
            duration={1000}
            onClick={() => scrollToSection('banner')}
            activeClass="active"
            spy={true}
            offset={-80}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            onClick={() => scrollToSection('about')}
            activeClass="active"
            spy={true}
            offset={-80}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={1000}
            onClick={() => scrollToSection('services')}
            activeClass="active"
            spy={true}
            offset={-80}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            onClick={() => scrollToSection('services')}
            activeClass="active"
            spy={true}
            offset={-80}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            onClick={() => scrollToSection('about')}
            activeClass="active"
            spy={true}
            offset={-80}
          >
            Projects
          </Link>
        </li>
        
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            onClick={() => scrollToSection('contact')}
            activeClass="active"
            spy={true}
            offset={-80}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
