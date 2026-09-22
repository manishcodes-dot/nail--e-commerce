import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutSection from './components/AboutSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import DiscountBanner from './components/DiscountBanner.jsx';
import SpecialistsSection from './components/SpecialistsSection.jsx';
import GalleryGrid from './components/GalleryGrid.jsx';
import ContactBooking from './components/ContactBooking.jsx';
import WorkingHours from './components/WorkingHours.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQSection from './components/FAQSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setProducts(data.data);
        }
      })
      .catch((err) => console.log('API fallback:', err));
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="app">
      <Navbar cartCount={cart.length} />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <DiscountBanner />
        <SpecialistsSection />
        <GalleryGrid />
        <WorkingHours />
        <ContactBooking />
        <Testimonials />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
