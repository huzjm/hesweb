import React from 'react';
import { NavLink } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo-container">
        <NavLink to="/">
          <img src='/image/Huzefa Engineering Black logo-01.png' alt="Logo" className="logo" />
        </NavLink>
      </div>
      <div className="top-bar-links">
        <NavLink to="/contact" className="top-bar-link">
          Contact Us
        </NavLink>
        <NavLink to="/about" className="top-bar-link">
          About Us
        </NavLink>
      </div>
    </div>
  );
};

export default TopBar;