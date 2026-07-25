import React, { useState } from 'react';
import styles from './EditorialAccordion.module.css';

const accordionItems = [
  {
    id: 1,
    season: 'Autumn / Winter Release',
    title: 'Architectural Tailoring',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1200&auto=format&fit=crop', // High fashion runway look
    view: 'shop'
  },
  {
    id: 2,
    season: 'Bespoke Footwear',
    title: 'Italian Calfskin Form',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop', // Sleek designer sneakers/shoes
    view: 'shop'
  },
  {
    id: 3,
    season: 'The Leather Atelier',
    title: 'Raw Textured Hides',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop', // Luxury leather handbag close-up
    view: 'shop'
  },
  {
    id: 4,
    season: 'Archival Eyewear',
    title: 'Minimalist Optics',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop', // Modern luxury sunglasses portrait
    view: 'shop'
  }
];

const EditorialAccordion = ({ onNavigate }) => {
  // Track which card is currently expanded (defaults to the first card)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <p className={styles.subtitle}>Interactive Showcase</p>
        <h2 className={styles.title}>The Editorial Series</h2>
      </div>

      <div className={styles.accordionGrid}>
        {accordionItems.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={item.id}
              className={`${styles.panel} ${isActive ? styles.panelActive : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => {
                setActiveIndex(index);
                if (onNavigate) onNavigate(item.view);
              }}
            >
              <img src={item.image} alt={item.title} className={styles.panelImage} />
              <div className={styles.overlay} />
              
              <div className={styles.content}>
                <span className={styles.cardSeason}>{item.season}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={styles.exploreLink}>Explore Collection →</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EditorialAccordion;