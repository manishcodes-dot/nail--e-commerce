import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide a full range of nail care, including manicures, pedicures, gel extensions, acrylics, nail art, and spa treatments."
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer: "While walk-ins are welcome based on availability, we highly recommend booking in advance to guarantee your preferred time slot and technician."
  },
  {
    question: "How long do gel or acrylic nails last?",
    answer: "Gel and acrylic nails typically last between 2 to 4 weeks depending on natural nail growth and daily care habits."
  },
  {
    question: "Are the products you use safe for nails?",
    answer: "Yes, we strictly use high-grade, non-toxic, non-damaging, and cruelty-free products that protect and nourish your natural nail health."
  },
  {
    question: "How should I take care of my nails after a service?",
    answer: "Keep cuticles hydrated using cuticle oil daily, avoid using nails as tools to open containers, and wear protective gloves during dishwashing."
  },
  {
    question: "Do you offer custom nail art designs?",
    answer: "Absolutely! Bring your favorite reference photos from Instagram or Pinterest, and our master nail artists will bring your vision to life."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section container">
      <div style={{ textAlign: 'center' }}>
        <span className="section-subtitle">FAQs</span>
        <h2 className="section-title">Quick Answers for You</h2>
      </div>

      <div className="faq-grid">
        <div className="faq-arch-img">
          <div className="arch-frame" style={{ height: '100%' }}>
            <img 
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop" 
              alt="FAQ nail service" 
            />
          </div>
        </div>

        <div className="accordion-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className="accordion-item">
              <div className="accordion-header" onClick={() => toggleIndex(idx)}>
                <span>{faq.question}</span>
                {openIdx === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
              {openIdx === idx && (
                <div className="accordion-content">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
