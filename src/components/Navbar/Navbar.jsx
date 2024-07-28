import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import favicon from '../../images/favicon.png';

function Navbar() {
  const [color, setColor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 95) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`${color || window.innerWidth <= 768 ? 'navbar bg-nav text-black' : 'navbar text-white'}`}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img
              src={favicon}
              alt="logo"
              className="w-12 h-12 sm:w-12 sm:h-12 lg:w-12 lg:h-12 mx-auto sm:mx-0"
              data-aos="fade-up"
            />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"} onClick={handleClose}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/restaurant">Restaurant</Link></li>
          <li><Link to="/gallary">Gallery</Link></li>
          <li><Link to="/aboutus">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/MeetingPage">Meetings</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
