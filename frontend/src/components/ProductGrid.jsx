import React from 'react';
import ProductCard from './ProductCard.jsx';

const defaultProducts = [
  {
    id: 1,
    name: 'Luxe Beige Polish',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Luxe Teal Polish',
    price: 13.00,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Luxe Coral Polish',
    price: 14.00,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=500&auto=format&fit=crop'
  }
];

export default function ProductGrid({ products = defaultProducts, onAddToCart }) {
  const displayProducts = products.length > 0 ? products.slice(0, 3) : defaultProducts;

  return (
    <section id="shop" className="products-section container">
      <div className="products-header-flex">
        <div>
          <span className="section-subtitle">OUR PRODUCTS</span>
          <h2 className="serif" style={{ fontSize: '2.5rem' }}>Luxe Nail Products</h2>
        </div>
        <a href="#shop" className="btn btn-black">View All Products</a>
      </div>

      <div className="products-grid-3">
        {displayProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </section>
  );
}
