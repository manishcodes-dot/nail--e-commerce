import React, { useState } from 'react';

const testimonials = [
  {
    quote: "Professional, creative, and so talented. I feel like my nails are little masterpieces every time I leave the salon.",
    author: "Sarah",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
  },
  {
    quote: "The best nail studio in town! The gel extensions last over 4 weeks without chipping. Highly recommended!",
    author: "Elena R.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
  },
  {
    quote: "Atmosphere is so relaxing and the technicians take so much care with detailing and hygiene.",
    author: "Jessica M.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="testimonials-section container">
      <span className="section-subtitle">Testimonials</span>
      <h2 className="section-title">Happy Clients, Happy Us</h2>

      <div className="testimonial-card-grid">
        <div className="testimonial-arch-img">
          <div className="arch-frame" style={{ height: '100%' }}>
            <img src={testimonials[activeIdx].image} alt={testimonials[activeIdx].author} />
          </div>
        </div>

        <div className="testimonial-content">
          <p className="quote-text">"{testimonials[activeIdx].quote}"</p>
          <p className="author-name">— {testimonials[activeIdx].author}</p>
        </div>
      </div>

      <div className="dots-pagination">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`dot ${activeIdx === i ? 'active' : ''}`}
            onClick={() => setActiveIdx(i)}
          />
        ))}
      </div>
    </section>
  );
}
