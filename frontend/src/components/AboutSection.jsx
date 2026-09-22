import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="studio-section">
      <div className="container">
        <div className="studio-grid">
          <div className="studio-text">
            <span className="section-subtitle">The Art of Nails</span>
            <h2>Crafting Timeless Beauty & Confidence</h2>
            <p style={{ marginTop: '16px', marginBottom: '28px' }}>
              At Luxe Nails, we believe that beauty is an experience, not just a service. Our studio was created with the goal of providing a luxurious, welcoming space where every client can relax, refresh, and leave feeling confident and beautiful. From classic manicures and pedicures to innovative nail art and treatments, we offer a wide range of services tailored to suit your individual style.
            </p>

            <div className="studio-btns" style={{ display: 'flex', gap: '16px', marginBottom: '36px' }}>
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

          <div className="arch-frame" style={{ height: '480px' }}>
            <img 
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop" 
              alt="Crafting Timeless Beauty & Confidence" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
