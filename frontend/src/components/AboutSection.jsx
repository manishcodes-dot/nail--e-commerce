import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-images-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop" 
            alt="Woman smiling showcasing nails" 
            className="about-img-main"
          />
          <img 
            src="https://images.unsplash.com/photo-1600057424095-2cc675238241?q=80&w=600&auto=format&fit=crop" 
            alt="Nail care treatment close up" 
            className="about-img-secondary"
          />
        </div>

        <div className="about-text">
          <span className="section-subtitle">ABOUT LUXE</span>
          <h2>Nails That Shine With Expert Care And True Artistic Creativity</h2>
          <p>
            Your nails deserve the best. At Luxe, every manicure and pedicure is performed with precision, using high-quality products that strengthen and protect. Whether you prefer a clean, natural finish or a statement-making design, our team ensures your nails stay beautiful, healthy, and strong.
          </p>
          <a href="#about" className="btn btn-black">More About Us</a>
        </div>
      </div>
    </section>
  );
}
