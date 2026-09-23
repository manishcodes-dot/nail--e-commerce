import React from 'react';

export default function DiscountBanner() {
  return (
    <section className="discount-wavy-section">
      {/* Top Signal Wave Divider */}
      <div className="wave-top-box">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="wave-svg">
          <path 
            fill="#22201F" 
            d="M0,50 C180,95 320,5 500,50 C680,95 820,5 1000,50 C1180,95 1320,5 1440,50 L1440,90 L0,90 Z"
          />
        </svg>
      </div>

      <div className="discount-main-box">
        {/* Animated / Decorative Signal Waves Overlay */}
        <div className="signal-waves-bg" aria-hidden="true">
          <svg viewBox="0 0 1200 160" preserveAspectRatio="none">
            <path d="M0,80 Q150,10 300,80 T600,80 T900,80 T1200,80" fill="none" stroke="rgba(196,139,139,0.3)" strokeWidth="2" />
            <path d="M0,80 Q150,150 300,80 T600,80 T900,80 T1200,80" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
            <path d="M0,80 Q200,30 400,80 T800,80 T1200,80" fill="none" stroke="rgba(196,139,139,0.15)" strokeWidth="1" />
          </svg>
        </div>

        <div className="container discount-content">
          <span className="section-subtitle">Monthly Discount</span>
          <h2>40% Discount</h2>
          <p>
            Our premium nail and beauty services, from manicures and pedicures to gel extensions and nail art, it's the perfect chance to treat yourself to a luxurious makeover at an unbeatable price!
          </p>
          <a href="#footer" className="btn btn-white">
            Get The Discount
          </a>
        </div>
      </div>

      {/* Bottom Signal Wave Divider */}
      <div className="wave-bottom-box">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="wave-svg">
          <path 
            fill="#22201F" 
            d="M0,0 L1440,0 L1440,40 C1320,85 1180,0 1000,45 C820,90 680,5 500,45 C320,85 180,0 0,40 Z"
          />
        </svg>
      </div>
    </section>
  );
}

