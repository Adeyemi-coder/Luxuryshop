import React from 'react';
import styles from './JournalSection.module.css';

const articles = [
  {
    id: 1,
    date: 'Dispatches — May 2026',
    title: 'The Evolution of Raw Silk & Architectural Drapes',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    date: 'Atelier Notes — Florence',
    title: 'Why Vegetable-Tanned Hide Patinas Over Decades',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    date: 'Exhibition Review',
    title: 'Minimalism, Space, and the Brutalist Runway',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop'
  }
];

const JournalSection = ({ onNavigate }) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <p className={styles.subtitle}>The Maison Journal</p>
          <h2>Stories & Studies</h2>
        </div>
        <button onClick={() => onNavigate && onNavigate('logbook')} className={styles.viewAllBtn}>
          View Private Archive →
        </button>
      </div>

      <div className={styles.grid}>
        {articles.map((item) => (
          <article key={item.id} className={styles.card} onClick={() => onNavigate && onNavigate('logbook')}>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.title} className={styles.image} />
            </div>
            <div>
              <span className={styles.meta}>{item.date}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default JournalSection;