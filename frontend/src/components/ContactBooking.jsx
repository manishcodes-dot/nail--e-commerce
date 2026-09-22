import React, { useState } from 'react';

export default function ContactBooking() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="contact-section container">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span className="section-subtitle">Contact Us</span>
        <h2 className="section-title">Reach Out To Us</h2>
      </div>

      <div className="contact-grid">
        <div className="booking-form-box">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 0' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Appointment Requested!</h3>
              <p style={{ color: 'var(--text-muted)' }}>Thank you, {formData.firstName}. We will confirm your booking shortly via email/phone.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First name *</label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="First name" />
                </div>
                <div className="form-group">
                  <label>Last name *</label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} placeholder="Last name" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label>Services</label>
                <select name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  <option value="gel-extensions">Gel Extensions</option>
                  <option value="manicure">Classic Manicure</option>
                  <option value="pedicure">Pedicure Spa</option>
                  <option value="nail-art">Custom Nail Art</option>
                  <option value="acrylic">Acrylic Extensions</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date picker</label>
                  <input type="date" name="date" required value={formData.date} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <input type="time" name="time" required value={formData.time} onChange={handleChange} />
                </div>
              </div>

              <button type="submit" className="btn btn-black" style={{ width: '100%', marginTop: '10px' }}>
                Submit
              </button>
            </form>
          )}
        </div>

        <div className="contact-arch-wrapper">
          <div className="arch-frame" style={{ height: '100%' }}>
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" 
              alt="Reach out to us model" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
