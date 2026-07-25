import React, { useState, useEffect } from 'react';
import ProductGallery from '../components/products/ProductGallery';
import ProductAccordion from '../components/products/ProductAccordion';

const ProductDetail = ({ product, onAddToCart, onNavigate, onSelectProduct }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Obsidian Black');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddedAnim, setIsAddedAnim] = useState(false);
  const [isHoveredBtn, setIsHoveredBtn] = useState(false);

  if (!product) {
    return (
      <div className="container" style={{ padding: 'var(--space-24) 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>Product Not Found</h2>
        <button 
          onClick={() => onNavigate('shop')} 
          style={{ backgroundColor: 'var(--text-main)', color: 'var(--bg-primary)', padding: 'var(--space-4) var(--space-8)', borderRadius: 'var(--radius-full)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.2em', cursor: 'pointer', border: 'none' }}
        >
          Return to Catalog
        </button>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(product.price);

  const handleAddWithFeedback = () => {
    onAddToCart(product);
    setIsAddedAnim(true);
    setTimeout(() => setIsAddedAnim(false), 2000);
  };

  // Calculate dynamic delivery window (e.g., 3-5 days from now)
  const today = new Date();
  const deliveryStart = new Date(today);
  deliveryStart.setDate(today.getDate() + 3);
  const deliveryEnd = new Date(today);
  deliveryEnd.setDate(today.getDate() + 5);
  const options = { month: 'short', day: 'numeric' };
  const deliveryString = `${deliveryStart.toLocaleDateString('en-US', options)} – ${deliveryEnd.toLocaleDateString('en-US', options)}`;

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '95vh', padding: 'var(--space-12) 0 var(--space-24) 0' }}>
      <div className="container">
        
        {/* 1. Breadcrumb */}
        <div style={{ marginBottom: 'var(--space-10)', display: 'flex', gap: 'var(--space-3)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-muted)', alignItems: 'center' }}>
          <button onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('shop')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>{product.category}</button>
          <span>/</span>
          <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>{product.name}</span>
        </div>

        {/* Master Flagship Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-16)' }} className="lg-grid-cols-12">
          
          {/* Left: Gallery (7 Cols) */}
          <div style={{ gridColumn: 'span 7' }} className="lg-col-span-7">
            <ProductGallery product={product} productName={product.name} />
          </div>

          {/* Right: Info & Purchase (5 Cols) */}
          <div style={{ gridColumn: 'span 5' }} className="lg-col-span-5">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              
              {/* Header Info & Social Proof */}
              <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-gold)', fontWeight: '700' }}>
                    Maison Atelier Flagship
                  </span>
                  <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem', color: isWishlisted ? '#E11D48' : 'var(--text-muted)', transition: 'transform 0.2s ease' }}
                    title="Save to Wishlist"
                  >
                    {isWishlisted ? '♥' : '♡'}
                  </button>
                </div>

                <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 3vw, 3.2rem)', fontWeight: '400', color: 'var(--text-main)', marginBottom: 'var(--space-3)', lineHeight: '1.15' }}>
                  {product.name}
                </h1>
                
                {/* Social Proof Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <div style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', letterSpacing: '2px' }}>
                    ★★★★★
                  </div>
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--text-main)' }}>4.9</span>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>(124 Verified Reviews)</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
                  <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-sans)', fontWeight: '600', color: 'var(--text-main)' }}>
                    {formattedPrice}
                  </p>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#16A34A', padding: '6px 12px', borderRadius: 'var(--radius-full)', fontWeight: '600' }}>
                    In Stock • Ready to Ship
                  </span>
                </div>
              </div>

              {/* 3. Color Selector with Active Glow & Checkmark Feedback */}
              <div style={{ marginBottom: 'var(--space-8)' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-main)', marginBottom: 'var(--space-3)', fontWeight: '600' }}>
                  Color: <span style={{ color: 'var(--text-muted)', fontWeight: '400' }}>{selectedColor}</span>
                </label>
                <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                  {[
                    { name: 'Obsidian Black', hex: '#111' },
                    { name: 'Milano Navy', hex: '#1E3A8A' },
                    { name: 'Alabaster Ivory', hex: '#F3F4F6' }
                  ].map((colorObj) => {
                    const isSelected = selectedColor === colorObj.name;
                    return (
                      <button
                        key={colorObj.name}
                        onClick={() => setSelectedColor(colorObj.name)}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          backgroundColor: colorObj.hex,
                          border: isSelected ? '3px solid var(--accent-gold)' : '1px solid var(--border-dark)',
                          cursor: 'pointer',
                          position: 'relative',
                          transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                          boxShadow: isSelected ? '0 0 12px rgba(197, 160, 89, 0.5)' : 'none',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        title={colorObj.name}
                      >
                        {isSelected && (
                          <span style={{ fontSize: '0.7rem', color: colorObj.hex === '#F3F4F6' ? '#000' : '#fff', fontWeight: '700' }}>
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Size Selector (Including Out-of-Stock XXL State) */}
              <div style={{ marginBottom: 'var(--space-8)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-main)', fontWeight: '600' }}>
                    Select Size: <span style={{ color: 'var(--accent-gold)' }}>{selectedSize}</span>
                  </span>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', cursor: 'pointer', textDecoration: 'underline' }}>
                    Size Guide
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-2)' }}>
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => {
                    const isOutStock = size === 'XXL';
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        disabled={isOutStock}
                        onClick={() => !isOutStock && setSelectedSize(size)}
                        style={{
                          height: '50px',
                          borderRadius: 'var(--radius-sm)',
                          border: isSelected ? '2px solid var(--text-main)' : '1px solid var(--border-light)',
                          backgroundColor: isOutStock ? 'var(--bg-surface)' : (isSelected ? 'var(--text-main)' : 'var(--bg-surface)'),
                          color: isOutStock ? 'var(--text-muted)' : (isSelected ? 'var(--bg-primary)' : 'var(--text-main)'),
                          fontWeight: '600',
                          fontSize: '0.8rem',
                          letterSpacing: '0.1em',
                          cursor: isOutStock ? 'not-allowed' : 'pointer',
                          textDecoration: isOutStock ? 'line-through' : 'none',
                          opacity: isOutStock ? 0.4 : 1,
                          transition: 'all var(--transition-fast)'
                        }}
                        title={isOutStock ? 'Out of Stock' : size}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
                {/* Out of stock helper note */}
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '6px', display: 'block' }}>
                  * XXL currently out of stock. Sign up for restock alerts.
                </span>
              </div>

              {/* 5. Add-to-Bag Button with Micro-Interaction Arrow Slide */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                <button
                  onClick={handleAddWithFeedback}
                  onMouseEnter={() => setIsHoveredBtn(true)}
                  onMouseLeave={() => setIsHoveredBtn(false)}
                  style={{
                    width: '100%',
                    backgroundColor: isAddedAnim ? '#16A34A' : 'var(--text-main)',
                    color: 'var(--bg-primary)',
                    padding: 'var(--space-5)',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.25em',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    border: 'none',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    transform: isHoveredBtn && !isAddedAnim ? 'translateY(-2px)' : 'translateY(0)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {isAddedAnim ? '✓ Added to Shopping Bag' : (
                    <span>
                      ADD TO BAG — {formattedPrice} <span style={{ display: 'inline-block', transform: isHoveredBtn ? 'translateX(6px)' : 'translateX(0)', transition: 'transform 0.2s ease' }}>→</span>
                    </span>
                  )}
                </button>

                {/* 6. Trust Builders & Estimated Delivery */}
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: 'var(--space-4)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-main)', fontWeight: '600', borderBottom: '1px solid var(--border-light)', paddingBottom: '6px' }}>
                    <span>📦 Estimated Delivery</span>
                    <span style={{ color: 'var(--accent-gold)' }}>{deliveryString}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', paddingTop: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    <span>✓ Free Shipping</span>
                    <span>✓ 30-Day Returns</span>
                    <span>✓ Secure Checkout</span>
                    <span>✓ 100% Authentic</span>
                  </div>
                </div>
              </div>

              {/* Accordion Specifications */}
              <ProductAccordion />

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetail;