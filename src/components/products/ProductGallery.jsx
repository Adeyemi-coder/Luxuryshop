import React, { useState } from 'react';

const ProductGallery = ({ product, productName }) => {
  const galleryImages = [
    product?.image || 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div style={{ display: 'flex', gap: 'var(--space-6)', position: 'sticky', top: '100px', alignItems: 'flex-start' }}>
      
      {/* Vertical Thumbnail Strip */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxHeight: '620px', overflowY: 'auto', paddingRight: '4px' }}>
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: '85px',
              height: '110px',
              borderRadius: 'var(--radius-sm)',
              border: currentIndex === idx ? '2px solid var(--text-main)' : '1px solid var(--border-light)',
              overflow: 'hidden',
              padding: 0,
              cursor: 'pointer',
              backgroundColor: 'var(--bg-surface)',
              opacity: currentIndex === idx ? 1 : 0.5,
              transition: 'all var(--transition-fast)'
            }}
          >
            <img src={img} alt={`${productName} view ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
          </button>
        ))}
      </div>

      {/* Main Image Stage */}
      <div 
        onClick={() => setIsLightboxOpen(true)}
        style={{ 
          flex: 1, 
          height: '620px', 
          backgroundColor: '#0F0F0F', /* Elegant dark studio background fill */
          borderRadius: 'var(--radius-md)', 
          overflow: 'hidden', 
          position: 'relative', 
          cursor: 'zoom-in',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Using object-fit: contain guarantees the entire photo (head, dress, and base) is fully displayed */}
        <img 
          src={galleryImages[currentIndex]} 
          alt={productName} 
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', transition: 'transform 0.5s ease' }} 
        />
        <span style={{ position: 'absolute', bottom: 'var(--space-4)', right: 'var(--space-4)', backgroundColor: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', padding: '8px 16px', borderRadius: 'var(--radius-full)' }}>
          Click to Zoom
        </span>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(10,10,10,0.95)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-8)' }}>
          <button 
            onClick={() => setIsLightboxOpen(false)}
            style={{ position: 'absolute', top: 'var(--space-8)', right: 'var(--space-8)', background: 'none', border: 'none', color: '#fff', fontSize: 'var(--text-lg)', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.2em' }}
          >
            Close [✕]
          </button>
          <img src={galleryImages[currentIndex]} alt={productName} style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain' }} />
        </div>
      )}

    </div>
  );
};

export default ProductGallery;