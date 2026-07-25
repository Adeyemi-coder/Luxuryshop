import React, { useState } from 'react';
import styles from './Hero3DCard.module.css';

const Hero3DCard = ({ onNavigate, onAddToCart }) => {
  // State for dynamic 3D mouse tracking tilt angles
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within card
    const y = e.clientY - rect.top;  // y position within card
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation angles (-15deg to 15deg)
    const rotateX = -((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    // Reset smoothly to flat position when mouse leaves
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <section className={styles.showcaseSection}>
      <div className="container">
        <div className={styles.wrapper}>
          
          {/* Left Column: Editorial Description */}
          <div className={styles.textContent}>
            <span className={styles.tagline}>Immersive 3D Digital Showroom</span>
            <h2 className={styles.title}>The Future of Luxury Digital Retail.</h2>
            <p className={styles.description}>
              Experience our garments through real-time interactive spatial layers. Hover across the preview capsule to inspect physical depth, tactile finish, and bespoke architectural framing.
            </p>
            <div>
              <button 
                onClick={() => {
                  if (onNavigate) onNavigate('shop');
                  window.scrollTo({ top: '0', behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: 'var(--text-main)',
                  color: 'var(--bg-primary)',
                  padding: 'var(--space-4) var(--space-8)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all var(--transition-normal)'
                }}
              >
                Enter Spatial Catalog →
              </button>
            </div>
          </div>

          {/* Right Column: Interactive 3D Tilting Card */}
          <div className={styles.card3DContainer}>
            <div 
              className={styles.card3D}
              style={{ transform: transformStyle }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                if (onNavigate) onNavigate('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className={styles.badge3D}>Spatial Preview</span>
              
              <div className={styles.cardImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop" 
                  alt="3D Showcase Piece" 
                  className={styles.cardImage}
                />
              </div>

              <div className={styles.cardDetails}>
                <div>
                  <span className={styles.itemCategory}>Ready to Wear</span>
                  <h3 className={styles.itemTitle}>Structured Double-Breasted Coat</h3>
                </div>
                <span className={styles.itemPrice}>$2,650</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero3DCard;