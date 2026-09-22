import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section container">
      {/* Top Part: The Art of Perfect Nails */}
      <div className="hero-grid" style={{ marginBottom: '60px' }}>
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

      {/* Bottom Part: Our Awesome Nail Studio */}
      <div className="studio-grid" style={{ paddingTop: '50px', borderTop: '1px solid var(--border-light)' }}>
        <div className="studio-arch-images">
          <div className="arch-frame studio-arch-1">
            <img 
              src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop" 
              alt="Nail Studio Care" 
            />
          </div>
          <div className="arch-frame studio-arch-2">
            <img 
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop" 
              alt="Nail Studio Manicure" 
            />
          </div>
        </div>

        <div className="studio-text">
          <h2>Our Awesome<br />Nail Studio</h2>
          <p>
            Our nail studio, The Art of Perfect Nails, is more than beauty—it's an experience. We pamper, style, and inspire confidence with every visit. From flawless manicures and soothing pedicures to stunning nail art, our team blends creativity, precision, and premium products to give your nails the perfection they truly deserve.
          </p>

          <div className="studio-btns">
            <a href="#contact" className="btn btn-black">Book Appointment</a>
            <a href="#services" className="btn btn-outline">Our Services</a>
          </div>

          <div className="stats-divider">
            <div className="stat-item">
              <h3>21+</h3>
              <p>Year Experience</p>
            </div>
            <div className="stat-item">
              <h3>2k+</h3>
              <p>Happy Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
