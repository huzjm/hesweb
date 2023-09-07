import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer"><div className="footer-column">
    {/* Third column content */}
    <h3>Contact Information</h3>
    <p>Email: info@huzefaengineering.com</p>
    <p>Phones: +92 32550551-52</p>
    <p>Office: B9-B1, SP Chambers, Suite# 14</p>
    <p> S.I.T.E., Karachi.</p>
    <p>Factory: E-146-147, H.I.T.E., Hub, Balochistan</p>
    <a href="https://www.linkedin.com/company/96448348" target="_blank" rel="noopener noreferrer" >
 <img src='/image/iconlinkedin.png' alt="Logo" className="footerlogo" />
</a>
<a href="https://www.facebook.com/p/HUZEFA-ENGINEERING-SERVICES-100063598717121/?paipv=0&eav=AfZHrqphuDzk7ev3vdCGDo-YR4xl7yzGByW0AUz57Z5vuMAf70PbvBS6slUfZKkNLEA&_rdr" target="_blank" rel="noopener noreferrer" >
 <img src='/image/iconfacebook.png' alt="Logo" className="footerlogo" />
</a>
<a href='https://wa.me/14034012929' target="_blank" rel="noopener noreferrer" >
 <img src='/image/iconwhatsapp.png' alt="Logo" className="footerlogo" />
</a>
  </div>
      
      <div className="footer-column">
        {/* Second column content */}
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="/heatexchanger">Heat Exchangers</a>
          </li>
          <li>
            <a href="/gratings">Gratings</a>
          </li>
          <li>
            <a href="/storage">Storage Tank</a>
          </li>
          <li>
            <a href="/bulkmovement">Bulk Movement</a>
          </li>
          <li>
            <a href="/prefab">Pre-Fabricated</a>
          </li>
          <li>
            <a href="/portable">Portable Offices</a>
          </li>
          <li>
            <a href="/supplies">General Supplies</a>
          </li>
          <li>
            <a href="/contactus">Contact Us</a>
          </li>
          {/* Add more links */}
        </ul>
      </div>
      <div className="footer-column">
        {/* First column content */}
        <h3>Our Office</h3>
        <NavLink to="https://goo.gl/maps/xLp6TrvujDnMJEj17" target="_blank">
        <div className='map-image-container'><img
          src='/image/hesofficemap1.jpg' className="map-image"       /></div>
          </NavLink>
        <p>B9-B1, SP Chambers, Suite# 14,</p>
        <p> S.I.T.E., Karachi.</p>
      </div>
    </footer>
  );
};

export default Footer;
