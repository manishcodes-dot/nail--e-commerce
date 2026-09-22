import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="why-grid">
          <div>
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">The best place for <br />a Makeover</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Transform your look and boost your confidence with our professional beauty services, tailored to make you feel your absolute best.
            </p>

            <div className="why-points">
              <div className="why-point-item">
                <h4>Years of Experience</h4>
                <p>Our team brings years of expertise to provide top-quality nail and beauty services.</p>
              </div>

              <div className="why-point-item">
                <h4>Professional Staff</h4>
                <p>Skilled and friendly professionals ensure every visit is relaxing and satisfying.</p>
              </div>

              <div className="why-point-item">
                <h4>Affordable Care Prices</h4>
                <p>High-quality treatments at prices that won't break the bank.</p>
              </div>

              <div className="why-point-item">
                <h4>Premium Quality Products</h4>
                <p>We use only the best products to keep your nails healthy and beautiful.</p>
              </div>
            </div>
          </div>

          <div className="why-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop" 
              alt="Makeover salon treatment" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
