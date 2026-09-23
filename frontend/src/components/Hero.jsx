import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section container">
      {/* SVG Clip Path Definition for Smooth Curved Hero Image Shape */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <clipPath id="hero-curved-shape" clipPathUnits="objectBoundingBox">
            <path d="M 0.50,0.00 C 0.70,0.00 0.88,0.05 0.88,0.15 L 0.88,0.85 C 0.88,0.95 0.70,1.00 0.50,1.00 C 0.30,1.00 0.12,0.95 0.12,0.85 L 0.12,0.15 C 0.12,0.05 0.30,0.00 0.50,0.00 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="hero-grid">
        <div className="hero-text">
          <h1>The Art of <br />Perfect Nails</h1>
          <p>
            The Art of Perfect Nails is not just about nail care—it's a luxurious experience crafted to pamper, beautify, and boost your confidence. From flawless manicures and relaxing pedicures to exquisite nail art, we blend creativity, precision, and premium products to give your nails the perfection they deserve.
          </p>
        </div>

        <div className="hero-arch-wrapper">
          <div className="hero-curved-frame">
            <img 
              src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop" 
              alt="The Art of Perfect Nails Manicure" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

