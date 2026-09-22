import React, { useState, useMemo } from 'react';
import { Search, Heart, Star, ChevronDown, SlidersHorizontal } from 'lucide-react';

const catalogProducts = [
  {
    id: 101,
    name: 'Rose Quartz Polish Lotion Spf 50+',
    category: 'Polishes',
    price: 18.00,
    oldPrice: 22.00,
    discount: '18% OFF',
    rating: 4.8,
    reviews: 817,
    badge: 'BEST SELLER',
    offerText: 'More Offer Inside',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 102,
    name: 'Aqualogica Radiance Dewy Gel Polish',
    category: 'Gel Extensions',
    price: 24.00,
    oldPrice: 28.00,
    discount: '14% OFF',
    rating: 4.7,
    reviews: 517,
    badge: 'BEST SELLER',
    offerText: 'More Offer Inside',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 103,
    name: 'Gold Leaf Luxe Gel Kit 50g',
    category: 'Care Kits',
    price: 32.00,
    oldPrice: 42.00,
    discount: '23% OFF',
    rating: 4.9,
    reviews: 436,
    badge: 'BEST SELLER',
    offerText: 'More Offer Inside',
    image: 'https://images.unsplash.com/photo-1600057424095-2cc675238241?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 104,
    name: 'Matte Lavender Acrylic Set 50gm',
    category: 'Acrylic Art',
    price: 16.00,
    oldPrice: 20.00,
    discount: '20% OFF',
    rating: 4.8,
    reviews: 363,
    badge: 'BEST SELLER',
    offerText: 'More Offer Inside',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 105,
    name: 'Sparkle Glitter Gel Polish',
    category: 'Polishes',
    price: 19.50,
    oldPrice: 24.00,
    discount: '18% OFF',
    rating: 4.6,
    reviews: 290,
    badge: 'NEW',
    offerText: 'More Offer Inside',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 106,
    name: 'Professional Nail Clipper Tool Set',
    category: 'Care Kits',
    price: 14.00,
    oldPrice: 18.00,
    discount: '22% OFF',
    rating: 4.9,
    reviews: 612,
    badge: 'NEW',
    offerText: 'More Offer Inside',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 107,
    name: 'Nude Beige Luxury Press-On Kit',
    category: 'Acrylic Art',
    price: 28.00,
    oldPrice: 35.00,
    discount: '20% OFF',
    rating: 4.7,
    reviews: 405,
    badge: 'SALE',
    offerText: 'More Offer Inside',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 108,
    name: 'Cuticle Nourishing Oil Serum 30ml',
    category: 'Care Kits',
    price: 15.00,
    oldPrice: 19.00,
    discount: '21% OFF',
    rating: 4.9,
    reviews: 940,
    badge: 'BEST SELLER',
    offerText: 'More Offer Inside',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop'
  }
];

export default function ShopPage({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(50);
  const [under20Only, setUnder20Only] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredProducts = useMemo(() => {
    return catalogProducts
      .filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesPrice = product.price <= maxPrice;
        const matchesBudget = !under20Only || product.price < 20;
        return matchesSearch && matchesCategory && matchesPrice && matchesBudget;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [searchTerm, selectedCategory, maxPrice, under20Only, sortBy]);

  return (
    <div className="shop-page-wrapper container">
      {/* Sidebar Filter Column */}
      <aside className="shop-sidebar">
        {/* Search Bar */}
        <div className="sidebar-search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search nail products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Price Range Filter */}
        <div className="filter-group">
          <h3 className="filter-title">Price Range</h3>
          <p className="price-display">$0 – ${maxPrice}</p>
          <input
            type="range"
            min="10"
            max="50"
            step="1"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="price-slider"
          />
        </div>

        {/* Filter by Categories */}
        <div className="filter-group">
          <div className="filter-group-header">
            <h3 className="filter-title">Filter by Categories</h3>
            <ChevronDown size={16} />
          </div>

          <div className="category-checkboxes">
            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={under20Only}
                onChange={(e) => setUnder20Only(e.target.checked)}
              />
              <span>Everything under $20</span>
            </label>

            {['All', 'Polishes', 'Gel Extensions', 'Acrylic Art', 'Care Kits'].map((cat) => (
              <label key={cat} className="checkbox-row">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Product Catalog Section */}
      <main className="shop-main-content">
        {/* Top Header Bar */}
        <div className="catalog-top-bar">
          <div className="catalog-title-area">
            <h1 className="catalog-heading">Nail Shop & PriceList</h1>
            <span className="total-products-badge">
              Total Products: {filteredProducts.length}
            </span>
          </div>

          <div className="sort-dropdown-box">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown size={14} className="select-arrow" />
          </div>
        </div>

        {/* 4-Column Product Grid */}
        <div className="shop-product-grid-4">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div key={product.id} className="ecom-product-card">
                {/* Product Badge */}
                <div className="ecom-card-badge">{product.badge}</div>

                {/* Product Image Box */}
                <div className="ecom-img-box">
                  <img src={product.image} alt={product.name} />
                </div>

                {/* Card Body Details */}
                <div className="ecom-card-body">
                  <div className="rating-row">
                    <span className="star-val">{product.rating}</span>
                    <Star size={13} className="star-icon" />
                    <span className="reviews-count">/5 ({product.reviews})</span>
                  </div>

                  <span className="discount-tag">{product.discount}</span>

                  <div className="price-row">
                    <span className="current-price">${product.price.toFixed(2)}</span>
                    <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                  </div>

                  <p className="offer-tag">❖ {product.offerText}</p>

                  <h3 className="product-title">{product.name}</h3>

                  {/* Card Actions Footer */}
                  <div className="ecom-card-actions">
                    <button
                      className="add-to-cart-pink-btn"
                      onClick={() => onAddToCart && onAddToCart(product)}
                    >
                      Add To Cart
                    </button>
                    <button
                      className={`wishlist-heart-btn ${isWishlisted ? 'active' : ''}`}
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Wishlist"
                    >
                      <Heart size={16} fill={isWishlisted ? '#C48B8B' : 'none'} color={isWishlisted ? '#C48B8B' : '#666'} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
