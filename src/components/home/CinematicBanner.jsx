import React from 'react';
import styles from './CinematicBanner.module.css';

const CinematicBanner = ({ onNavigate }) => {
  return (
    <section className={styles.section}>
      <img 
        src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1800&auto=format&fit=crop" 
        alt="Cinematic runway release" 
        className={styles.bannerImage} 
      />
      <div className={styles.overlay}>
        <span className={styles.tag}>Runway Presentation 2026</span>
        <h2 className={styles.title}>The Winter Monolith</h2>
        <button 
          onClick={() => onNavigate && onNavigate('logbook')} 
          className={styles.exploreBtn}
        >
          Enter Private Screening →
        </button>
      </div>
    </section>
  );
};

export default CinematicBanner;