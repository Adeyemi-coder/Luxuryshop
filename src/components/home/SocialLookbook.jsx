import React from 'react';
import styles from './SocialLookbook.module.css';

const lookbookImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop', tag: '@vogueandvault' },
  { id: 2, url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop', tag: '@milan.archives' },
  { id: 3, url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', tag: '@quietluxury' },
  { id: 4, url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop', tag: '@atelier.notes' }
];

const SocialLookbook = ({ onNavigate }) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.subtitle}>The Community Archive</p>
        <h2 className={styles.title}>Seen in the Wild</h2>
      </div>

      <div className={styles.grid}>
        {lookbookImages.map((item) => (
          <div key={item.id} className={styles.card} onClick={() => onNavigate && onNavigate('logbook')} style={{ cursor: 'pointer' }}>
            <img src={item.url} alt="Lookbook reference" className={styles.image} />
            <div className={styles.overlay}>
              <span className={styles.handle}>{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialLookbook;