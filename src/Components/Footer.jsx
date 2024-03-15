import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: Travelling@travel.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Street,Hyderabad,India</p>
        </div>
        <div className="social-links">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook-f"></i>    Facebook</a></li>
            <li><a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i>        Twitter</a></li>
            <li><a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i>  Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Travel Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
