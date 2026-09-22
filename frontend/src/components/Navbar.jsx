import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="side-tag-floating">Other Pages</div>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="container nav-bar">
          <a href="#" className="script-logo">Nails</a>

          <ul className="nav-links">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#pricing">PriceList</a></li>
          </ul>

          <div className="nav-right">
            <a href="#contact" className="btn btn-outline" style={{ borderRadius: '50px', padding: '10px 24px' }}>
              Get in touch
            </a>
            <a href="#shop" className="cart-icon-btn" aria-label="Shopping Bag">
              <ShoppingBag size={18} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
