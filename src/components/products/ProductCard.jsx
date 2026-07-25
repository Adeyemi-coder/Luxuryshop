import React, { useState } from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onSelectProduct }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Define primary and secondary images safely
  const primaryImg = product.image;
  const secondaryImg = product.secondaryImage || product.image;

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    if (onSelectProduct) onSelectProduct(product);
  };

  return (
    <article 
      className={styles.card}
      onClick={() => onSelectProduct && onSelectProduct(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${product.name} by Maison Atelier`}
    >
      {/* Image Stage Container */}
      <div className={styles.imageContainer}>
        {product.badge && (
          <span className={styles.badge}>{product.badge}</span>
        )}

        {/* Wishlist Button */}
        <button 
          onClick={handleWishlistClick}
          className={`${styles.wishlistBtn} ${isWishlisted ? styles.wishlisted : ''}`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          {isWishlisted ? '♥' : '♡'}
        </button>

        {/* Single Dynamic Image with Smooth Crossfade/Swap */}
        <img 
          src={isHovered ? secondaryImg : primaryImg} 
          alt={product.name} 
          className={styles.image}
          loading="lazy"
        />

        {/* Quick View Button */}
        <button onClick={handleQuickView} className={styles.quickViewBtn}>
          Quick View
        </button>
      </div>

      {/* Product Metadata */}
      <div className={styles.meta}>
        <span className={styles.brand}>Maison Atelier</span>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.price}>
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(product.price)}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;