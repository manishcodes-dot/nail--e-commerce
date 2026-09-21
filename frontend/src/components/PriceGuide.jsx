import React from 'react';

const manicureServices = [
  { name: 'Classic Manicure', price: '$25' },
  { name: 'Organic Manicure', price: '$30' },
  { name: 'Gel Polish Manicure', price: '$35' },
  { name: 'Luxe Spa Manicure', price: '$40' },
  { name: 'French Manicure', price: '$32' },
];

const pedicureServices = [
  { name: 'Classic Pedicure', price: '$30' },
  { name: 'Organic Pedicure', price: '$35' },
  { name: 'Gel Polish Pedicure', price: '$38' },
  { name: 'Luxe Spa Pedicure', price: '$45' },
  { name: 'Deluxe Hot Stone Pedicure', price: '$50' },
];

export default function PriceGuide() {
  return (
    <section id="pricing" className="price-guide-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PRICING PLAN</span>
          <h2>Price Guide</h2>
          <p>Simple pricing for nails you'll love to show off.</p>
        </div>

        <div className="price-grid">
          {/* Manicure Card */}
          <div className="price-card">
            <img 
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=400&auto=format&fit=crop" 
              alt="Manicure treatment" 
              className="price-card-img"
            />
            <div className="price-card-details">
              <h3>Manicure</h3>
              <div className="menu-list">
                {manicureServices.map((item, idx) => (
                  <div key={idx} className="menu-item">
                    <span>{item.name}</span>
                    <span className="menu-item-dots"></span>
                    <span className="menu-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pedicure Card */}
          <div className="price-card">
            <img 
              src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=400&auto=format&fit=crop" 
              alt="Pedicure treatment" 
              className="price-card-img"
            />
            <div className="price-card-details">
              <h3>Pedicure</h3>
              <div className="menu-list">
                {pedicureServices.map((item, idx) => (
                  <div key={idx} className="menu-item">
                    <span>{item.name}</span>
                    <span className="menu-item-dots"></span>
                    <span className="menu-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
