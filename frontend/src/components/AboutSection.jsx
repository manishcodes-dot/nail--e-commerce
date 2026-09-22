import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="studio-section">
      <div className="container">
        <div className="studio-grid">
          <div className="studio-text">
            <span className="section-subtitle">The Art of Nails</span>
            <h2>Crafting Timeless Beauty & Confidence</h2>
            <p style={{ marginTop: '16px' }}>
              At [Your Salon Name], we believe that beauty is an experience, not just a service. Our salon was created with the goal of providing a luxurious, welcoming space where every client can relax, refresh, and leave feeling confident and beautiful. From classic manicures and pedicures to innovative nail art and treatments, we offer a wide range of services tailored to suit your individual style and needs. Our team of skilled, passionate nail technicians is committed to delivering flawless results every time.
            </p>

            <div style={{ marginTop: '36px' }}>
              <a href="#services" className="btn btn-outline">See Our Services</a>
            </div>
          </div>

          <div className="arch-frame" style={{ height: '420px' }}>
            <img 
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop" 
              alt="Nail Art Close Up" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
