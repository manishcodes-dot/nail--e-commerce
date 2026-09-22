import React from 'react';

const services = [
  {
    id: 1,
    title: 'Gel Extensions',
    description: 'Length and elegance with durable, natural-looking gel extensions, perfectly shaped for a flawless finish.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Nail Clippers & Shaping',
    description: 'Trim and shape your nails, leaving them neat, polished, and perfectly finished for a clean, elegant look.',
    image: 'https://images.unsplash.com/photo-1600057424095-2cc675238241?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Artistic Expression Nails',
    description: 'Creativity and flair with unique, hand-crafted nail designs, perfectly shaped for a flawless finish.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Glitter & Glam Nails',
    description: 'Sparkle and glamour with dazzling, long-lasting glitter designs, perfectly crafted for a flawless finish.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Manicure Care',
    description: 'Enhance your hands with smooth, polished nails, perfectly shaped for a flawless and elegant finish.',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Pedicure Spa',
    description: 'Pamper your feet with smooth, polished nails, perfectly shaped for a flawless and elegant finish.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section container">
      <span className="section-subtitle">Our Services</span>
      <h2 className="section-title">Transform Your Look at <br />Nail Salon</h2>

      <div className="services-grid-3">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-img-box">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#contact" className="discover-btn">
              Discover →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
