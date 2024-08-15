import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>We are dedicated to finding loving homes for all our pets. Thank you for considering adoption and giving them a second chance.</p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#adopt">Adopt a Pet</a></li>
            <li><a href="#volunteer">Volunteer</a></li>
            <li><a href="#donate">Donate</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: contact@adoptioncenter.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: 123 Animal Shelter St, City, Country</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Animal Adoption Center. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

