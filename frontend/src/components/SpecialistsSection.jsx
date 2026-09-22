import React from 'react';

const teamMembers = [
  {
    name: 'Ashley',
    role: 'Nail Art Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Lena',
    role: 'Gel Nail Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Chloe',
    role: 'Pedicure Expert',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Emily',
    role: 'Acrylic Nail Artist',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop'
  }
];

export default function SpecialistsSection() {
  return (
    <section className="team-section container">
      <span className="section-subtitle">Our Team</span>
      <h2 className="section-title">The Faces Behind the Beauty</h2>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-img-frame">
              <img src={member.image} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
