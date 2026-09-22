import React from 'react';

export default function WorkingHours() {
  return (
    <section className="working-hours-section container">
      <div className="working-hours-card">
        <div className="working-hours-img">
          <img 
            src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop" 
            alt="Nourish Your Nails" 
          />
        </div>

        <div>
          <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>Working Hours</span>
          <h2 style={{ color: '#ffffff', fontSize: '3rem', marginBottom: '16px' }}>Nourish Your Nails</h2>

          <div className="hours-list">
            <div className="hours-row">
              <span>Monday - Friday</span>
              <span>09:00 AM - 19:00 PM</span>
            </div>
            <div className="hours-row">
              <span>Saturday</span>
              <span>09:00 AM - 14:00 PM</span>
            </div>
            <div className="hours-row">
              <span>Sunday</span>
              <span>09:00 AM - 14:00 PM</span>
            </div>
          </div>

          <a href="#contact" className="btn btn-white">
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
