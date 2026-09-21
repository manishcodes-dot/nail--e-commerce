import React, { useState, useEffect } from 'react';

export default function Navbar({ cartCount }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="container nav-bar">
        <div className="logo">Luxe</div>

        <ul className="nav-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#shop">Products</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>

        <div className="nav-icons">
          <a href="#shop" className="cart-btn">
            Bag <span className="cart-count">{cartCount}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
