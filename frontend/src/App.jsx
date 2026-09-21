import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeatureBar from './components/FeatureBar.jsx';
import AboutSection from './components/AboutSection.jsx';
import PriceGuide from './components/PriceGuide.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import GalleryBanner from './components/GalleryBanner.jsx';
import SpecialistsSection from './components/SpecialistsSection.jsx';
import Testimonials from './components/Testimonials.jsx';
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
      .catch((err) => console.log('Using local products fallback:', err));
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="app">
      <Navbar cartCount={cart.length} />
      <main>
        <Hero />
        <FeatureBar />
        <AboutSection />
        <PriceGuide />
        <ProductGrid products={products} onAddToCart={handleAddToCart} />
        <GalleryBanner />
        <SpecialistsSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
