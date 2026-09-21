import React from 'react';
import { MapPin, Sparkles, Palette } from 'lucide-react';

export default function FeatureBar() {
  return (
    <section className="features-bar">
      <div className="container features-grid">
        <div className="feature-item">
          <div className="feature-icon-circle">
            <MapPin size={22} strokeWidth={1.5} color="#ffffff" />
          </div>
          <h3>Convenient Location</h3>
          <p>Visit us in a welcoming space designed for nail care and relaxation.</p>
        </div>

        <div className="feature-item">
          <div className="feature-icon-circle">
            <Sparkles size={22} strokeWidth={1.5} color="#ffffff" />
          </div>
          <h3>Expert Nail Artists</h3>
          <p>Skilled professionals who perfect every detail, from shaping to finishing.</p>
        </div>

        <div className="feature-item">
          <div className="feature-icon-circle">
            <Palette size={22} strokeWidth={1.5} color="#ffffff" />
          </div>
          <h3>Creative Nail Designs</h3>
          <p>Classic styles or bold art—we craft looks that match your personality.</p>
        </div>
      </div>
    </section>
  );
}
