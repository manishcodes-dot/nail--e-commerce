import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section container">
      <div className="hero-grid">
        <div className="hero-text">
          <h1>The Art of <br />Perfect Nails</h1>
          <p>
            The Art of Perfect Nails is not just about nail care—it's a luxurious experience crafted to pamper, beautify, and boost your confidence. From flawless manicures and relaxing pedicures to exquisite nail art, we blend creativity, precision, and premium products to give your nails the perfection they deserve.
          </p>
        </div>

        <div className="hero-arch-wrapper">
          <div className="arch-frame" style={{ height: '100%' }}>
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
