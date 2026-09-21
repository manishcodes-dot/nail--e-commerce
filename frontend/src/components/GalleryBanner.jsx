import React from 'react';

export default function GalleryBanner() {
  return (
    <section id="gallery" className="gallery-banner">
      <div className="container gallery-grid">
        <div className="gallery-img-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop" 
            alt="Luxe Nail Art Close-up" 
          />
        </div>
        <div className="gallery-text">
          <span className="section-subtitle">NAIL GALLERY</span>
          <h2>Explore Our Luxe Nail Gallery</h2>
          <p>Browse our gallery of polished looks and artistic nail designs—your next Luxe style starts here.</p>
          <a href="#gallery" className="btn btn-black">View Gallery</a>
        </div>
      </div>
    </section>
  );
}
