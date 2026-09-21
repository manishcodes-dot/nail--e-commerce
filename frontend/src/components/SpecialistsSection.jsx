import React from 'react';

const specialists = [
  {
    name: 'Elena Rostova',
    role: 'Master Nail Artist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Sophia Chen',
    role: 'Nail Health Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Maya Lin',
    role: 'Creative Designer',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop'
  }
];

export default function SpecialistsSection() {
  return (
    <section className="specialists-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR SPECIALISTS</span>
          <h2>Our Nail Specialists</h2>
          <p>The Luxe team is passionate about nails. From classic manicures to advanced nail art, our specialists combine creativity, technique, and care to deliver flawless results.</p>
        </div>

        <div className="specialists-grid">
          {specialists.map((person, idx) => (
            <div key={idx} className="specialist-card">
              <img src={person.image} alt={person.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
