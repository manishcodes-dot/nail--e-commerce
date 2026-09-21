import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <div className="footer-logo">Luxe</div>
          <p className="footer-desc">
            Crafting luxury for your nails with pure, natural products and expert artistry since 2024.
          </p>
        </div>

        <div>
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links-list">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Price Guide</a></li>
            <li><a href="#shop">Products</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Connect</h4>
          <ul className="footer-links-list">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom-text">
        <p>&copy; {new Date().getFullYear()} Luxe Nails. All rights reserved.</p>
      </div>
    </footer>
  );
}
