import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Navbar({ cartCount = 0, currentPage = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, page, targetHash) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
    if (page === 'home' && targetHash) {
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="side-tag-floating">Other Pages</div>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="container nav-bar">
          <a href="#" className="script-logo" onClick={(e) => handleNavClick(e, 'home')}>
            Nails
          </a>

          <ul className="nav-links">
            <li>
              <a
                href="#"
                className={currentPage === 'home' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#shop"
                className={currentPage === 'shop' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'shop')}
              >
                Shop
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, 'home', '#about')}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleNavClick(e, 'home', '#services')}>
                Services
              </a>
            </li>
            <li>
              <a href="#footer" onClick={(e) => handleNavClick(e, 'home', '#footer')}>
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-right">
            <a
              href="#footer"
              className="btn btn-outline"
              style={{ borderRadius: '50px', padding: '10px 24px' }}
              onClick={(e) => handleNavClick(e, 'home', '#footer')}
            >
              Get in touch
            </a>
            <a
              href="#shop"
              className="cart-icon-btn"
              aria-label="Shopping Bag"
              onClick={(e) => handleNavClick(e, 'shop')}
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
