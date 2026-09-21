import React from 'react';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container testimonial-box">
        <span className="section-subtitle">TESTIMONIALS</span>
        <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
          What Our Clients Say?
        </h2>

        <div className="testimonial-stars">★★★★★</div>

        <p className="testimonial-quote">
          "My Luxe pedicure was such a relaxing experience from start to finish. The products felt soothing, and the polish was applied with incredible care. My feet felt softer, refreshed, and healthier than ever. The treatment lasted longer than expected, and the staff made me feel comfortable the entire visit."
        </p>

        <div className="avatar-group">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Client 1" />
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop" alt="Client 2" />
          <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop" alt="Client 3" />
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=100&auto=format&fit=crop" alt="Client 4" />
        </div>
      </div>
    </section>
  );
}
