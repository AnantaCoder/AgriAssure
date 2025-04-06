import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src="./images/grow 3.png" alt="" /></div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">Dashboard</a>
        <a href="#services">English</a>
       <button>Login</button>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger menu icon */}
      </div>
    </nav>
  );
};

export default Navbar;
