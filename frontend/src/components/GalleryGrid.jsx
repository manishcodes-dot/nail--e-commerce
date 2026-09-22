import React from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600057424095-2cc675238241?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600&auto=format&fit=crop'
];

export default function GalleryGrid() {
  return (
    <section id="gallery" className="gallery-section container">
      <span className="section-subtitle">Our Gallery</span>
      <h2 className="section-title">Our Nail Art Gallery</h2>

      <div className="gallery-grid-masonry">
        {galleryImages.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Nail Art ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
