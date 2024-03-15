import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Travel Explorer</h1>
      <nav className="navbar">
      <a href="#Home" className="navbar-link">Home</a>
        <a href="#destinations" className="navbar-link">Destinations</a>
        <a href="#contact" className="navbar-link">Contact</a>
      </nav>
    </header>
  );
}

export default Header;



