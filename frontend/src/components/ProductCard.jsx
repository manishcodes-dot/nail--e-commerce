import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card-luxury">
      <div className="product-img-box">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info-box">
        <h3>{product.name}</h3>
        <span className="product-price">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
