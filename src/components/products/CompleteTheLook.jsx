import React from 'react';
import { productsData } from '../../data/products';

const CompleteTheLook = ({ onSelectProduct }) => {
  // Grab 3 complementary items from our product data
  const complementaryItems = productsData.slice(1, 4);

  return (
    <div style={{ marginTop: 'var(--space-20)', borderTop: '1px solid var(--border-light)', paddingTop: 'var(--space-12)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--accent-gold)', display: 'block', marginBottom: 'var(--space-2)' }}>
          Curated Ensemble
        </span>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: '400', color: 'var(--text-main)' }}>
          Complete the Look
        </h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
        {complementaryItems.map((item) => (
          <div 
            key={item.id}
            onClick={() => {
              if (onSelectProduct) onSelectProduct(item);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-light)', padding: 'var(--space-4)', transition: 'transform 0.2s ease' }}
          >
            <div style={{ height: '220px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: 'var(--space-3)' }}>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)' }}>{item.category}</span>
            <h4 style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--text-main)', margin: '4px 0' }}>{item.name}</h4>
            <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-sans)', fontWeight: '600', color: 'var(--text-main)' }}>
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(item.price)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompleteTheLook;