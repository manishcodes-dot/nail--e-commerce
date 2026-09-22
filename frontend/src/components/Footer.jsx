import React from 'react';
import { ArrowUp, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid-4">
          <div className="footer-brand">
            <a href="#" className="script-logo">Nails</a>
            <p>
              We believe your nails are the ultimate accessory. Our mission is to deliver unique, long-lasting, and eye-catching nail designs that let your personality shine.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Terms And Condition</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>+44 573 222 7429</li>
              <li>Nailart@gmail.com</li>
              <li>7039 NE 138th St Kirkland,<br />Washington 98034</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Open Hours</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Mon - Fri: 09:00 AM - 19:00 PM<br />
              Sat - Sun: 09:00 AM - 14:00 PM
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={16} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>All Rights Reserved by Nail Art</span>
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
