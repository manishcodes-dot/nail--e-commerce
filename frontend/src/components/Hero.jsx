import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Elevate Your <br />Nails With Pure, <br />Natural Elegance</h1>
          <p>
            At Luxe, nail care is more than polish—it's an experience. We blend natural products, expert techniques, and trend-driven artistry to give your nails a flawless, lasting glow.
          </p>
          
          <div className="hero-actions">
            <a href="#appointment" className="btn btn-black">Book Appointment</a>
            <a href="#shop" className="btn btn-outline">Shop Now</a>
          </div>

          <div className="hero-product-card">
            <img 
              src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=200&auto=format&fit=crop" 
              alt="Luxe Soft Pink Polish" 
            />
            <div className="hero-product-info">
              <h4>Luxe Soft Pink Polish</h4>
              <div className="rating">
                <span className="rating-stars">★★★★★</span> (5.0)
              </div>
              <a href="#shop" className="see-more-link">See More</a>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop" 
            alt="Woman showing manicured nails" 
          />
        </div>
      </div>
    </section>
  );
}
