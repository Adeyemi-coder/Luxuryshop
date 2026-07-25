import React from 'react';
import styles from './CraftsmanshipBanner.module.css';

const CraftsmanshipBanner = ({ onNavigate }) => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.imageWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop" 
            alt="Atelier craft" 
            className={styles.image} 
          />
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>Atelier Philosophy</span>
          <h2 classNames={styles.title}>Hand-Canvas Construction & Permanent Design</h2>
          <p className={styles.text}>
            We reject mass production in favor of rigorous hand-tailoring. Each silhouette undergoes hours of structural fitting, utilizing historical wool canvases that mold directly to your form over time.
          </p>
          <button onClick={() => onNavigate && onNavigate('about')} className={styles.link}>
            Discover Our Heritage →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipBanner;