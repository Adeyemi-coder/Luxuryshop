import React from 'react';
import styles from './Marquee.module.css';

const Marquee = () => {
  const content = [
    "Complimentary Global Shipping on Orders Over $1,000",
    "Autumn / Winter 2026 Collection Now Live",
    "Private Concierge Available 24/7",
    "Handcrafted Italian Gabardine & Cashmere"
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {/* Render twice to ensure an infinite seamless loop */}
        {[...content, ...content].map((text, index) => (
          <span key={index} className={styles.item}>
            {text} <span className={styles.separator}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;