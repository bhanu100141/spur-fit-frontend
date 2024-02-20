import React from 'react';
import './App.css'

const Navbar = () => {
  return (
    <div className='main-container'>
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://assets.codepen.io/3727422/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1614668636&width=256" alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <a href="#emotions-manifesto">Emotions</a>
        <a href="#manifesto">Work With Us</a>
        <a href="#self-awareness-test">Self-awareness Test</a>
        <a href="#work-with-us">Work With Us</a>
      </div>
        <div>
        <button>Download app</button>
        </div>
    
    </nav>
    </div>
  );
};

export default Navbar;
