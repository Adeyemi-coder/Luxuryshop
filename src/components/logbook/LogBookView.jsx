import React from 'react';
import styles from './LogBook.module.css';

const logEntries = [
  {
    id: 1,
    date: 'Autumn Collection Archival Notes — 2026',
    title: 'The Architecture of Raw Silk',
    description: 'An intimate look into our sourcing trips through northern Italy, studying heavy raw silk blends designed to hold sculptural volume.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    date: 'Bespoke Craftsmanship Study',
    title: 'Hand-Stitched Structural Linings',
    description: 'Behind the scenes at our atelier as master tailors spend upwards of 40 hours hand-canvas interlining a single evening blazer.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    date: 'Materiality & Hide Research',
    title: 'Vegetable Tanning in Florence',
    description: 'Exploring traditional tannin extractions using tree bark and leaves, yielding full-grain leather that patinas gracefully over decades.',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop'
  }
];

const LogBookView = ({ onNavigate }) => {
  return (
    <div className={styles.container}>
      <button onClick={() => onNavigate('home')} className={styles.backBtn}>
        ← Return to Flagship
      </button>

      <div className={styles.header}>
        <p className={styles.subtitle}>Confidential Archive</p>
        <h1 className={styles.title}>The Private Log Book</h1>
        <p className={styles.description}>
          Unpublished lookbook notes, material studies, and private atelier dispatches reserved exclusively for our patrons.
        </p>
      </div>

      <div className={styles.grid}>
        {logEntries.map((entry) => (
          <article key={entry.id} className={styles.entryCard}>
            <div className={styles.imageWrapper}>
              <img src={entry.image} alt={entry.title} className={styles.cardImage} />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.date}>{entry.date}</span>
              <h3 className={styles.cardTitle}>{entry.title}</h3>
              <p className={styles.cardText}>{entry.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default LogBookView;