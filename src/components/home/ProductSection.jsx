import React, { useState, useEffect } from 'react';
import styles from './ProductSection.module.css';
import { productsData } from '../../data/products';
import ProductCard from '../products/ProductCard';

const filterTabs = [
  { label: 'All Releases', key: 'All' },
  { label: 'Ready to Wear', key: 'Ready to Wear' },
  { label: 'Footwear', key: 'Footwear' },
  { label: 'Eyewear', key: 'Eyewear' },
  { label: 'Leather & Jewelry', key: 'Accessories' }
];

const ProductSection = ({ activeCategory, onSelectCategory, onAddToCart, onSelectProduct }) => {
  // 1. Pagination State: Default to showing only 8 items
  const [visibleCount, setVisibleCount] = useState(8);

  // 2. Auto-Reset: Whenever the category changes, reset back to showing 8 items
  useEffect(() => {
    setVisibleCount(8);
  }, [activeCategory]);

  // 3. Filter the complete database array based on active category
  const filteredProducts = productsData.filter((item) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Accessories') {
      return item.category === 'Accessories' || item.category === 'Jewelry';
    }
    return item.category === activeCategory;
  });

  // 4. Slice the array to show only up to the visibleCount limit
  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section className={styles.section} id="shop">
      <div className="container">
        
        {/* Section Header & Filter Tabs */}
        <header className={styles.header}>
          <div>
            <p className={styles.subtitle}>Curated Releases</p>
            <h2 className={styles.title}>
              {activeCategory === 'All' ? 'Complete Inventory' : activeCategory} ({filteredProducts.length})
            </h2>
          </div>

          <div className={styles.filterBar}>
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => onSelectCategory(tab.key)}
                className={`${styles.filterBtn} ${activeCategory === tab.key ? styles.activeBtn : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        {/* Product Grid Display */}
        {displayedProducts.length === 0 ? (
          <p style={{ textAlign: 'center', padding: 'var(--space-16)', color: 'var(--text-muted)' }}>
            No pieces found in this category.
          </p>
        ) : (
          <div className="grid-4">
            {displayedProducts.map((item) => (
              <ProductCard 
                key={item.id} 
                product={item} 
                onAddToCart={onAddToCart}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {filteredProducts.length > visibleCount && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-12)' }}>
            <button 
              onClick={() => setVisibleCount((prev) => prev + 8)}
              style={{
                padding: 'var(--space-4) var(--space-8)',
                border: '1px solid var(--text-main)',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'transparent',
                color: 'var(--text-main)',
                fontSize: 'var(--text-xs)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                cursor: 'pointer',
                transition: 'all var(--transition-normal)'
              }}
              onMouseOver={(e) => { e.target.style.backgroundColor = 'var(--text-main)'; e.target.style.color = 'var(--bg-primary)'; }}
              onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--text-main)'; }}
            >
              Load More Releases ({filteredProducts.length - visibleCount} Remaining) ↓
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductSection;