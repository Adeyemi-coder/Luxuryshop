import React, { useEffect } from 'react';
import ProductSection from '../components/home/ProductSection';

const Shop = ({ activeCategory, onSelectCategory, onAddToCart, onNavigate, onSelectProduct }) => {
  // Automatically scroll to the top of the page whenever the Shop view loads or category changes!
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  return (
    <div style={{ paddingTop: 'var(--space-8)', minHeight: '80vh' }}>
      
      {/* Editorial Breadcrumb / Navigation Bar */}
      <div className="container" style={{ marginBottom: 'var(--space-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button 
          onClick={() => onNavigate('home')}
          style={{ 
            fontSize: 'var(--text-xs)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            color: 'var(--text-muted)', 
            cursor: 'pointer',
            borderBottom: '1px solid var(--text-muted)',
            paddingBottom: '2px',
            background: 'none',
            border: 'none'
          }}
        >
          ← Return to Editorial Showcase
        </button>

        <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Department Store Directory
        </span>
      </div>

      {/* Product Catalog Grid */}
      <ProductSection 
        activeCategory={activeCategory} 
        onSelectCategory={onSelectCategory} 
        onAddToCart={onAddToCart}
        onSelectProduct={onSelectProduct}
      />

    </div>
  );
};

export default Shop;