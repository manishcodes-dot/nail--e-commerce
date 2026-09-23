import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutSection from './components/AboutSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import DiscountBanner from './components/DiscountBanner.jsx';
import SpecialistsSection from './components/SpecialistsSection.jsx';
import GalleryGrid from './components/GalleryGrid.jsx';
import WorkingHours from './components/WorkingHours.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQSection from './components/FAQSection.jsx';
import ShopPage from './components/ShopPage.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
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
      <Navbar
        cartCount={cart.length}
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
      />
      <main>
        {currentPage === 'shop' ? (
          <ShopPage onAddToCart={handleAddToCart} />
        ) : (
          <>
            <Hero />
            <AboutSection />
            <ServicesSection />
            <WhyChooseUs />
            <DiscountBanner />
            <SpecialistsSection />
            <GalleryGrid />
            <WorkingHours />
            <Testimonials />
            <FAQSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

