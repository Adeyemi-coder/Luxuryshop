import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.subtitle}>The Maison Heritage</p>
        <h1 className={styles.title}>Defining Quiet Luxury & Architectural Form</h1>
      </div>

      <div className={styles.heroImageWrapper}>
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop" 
          alt="Atelier workspace" 
          className={styles.heroImage} 
        />
      </div>

      <div className={styles.contentGrid}>
        <div>
          <h2 className={styles.sectionTitle}>Uncompromising Craftsmanship</h2>
          <p className={styles.text}>
            Founded on the principles of restraint and permanence, Vogue & Vault operates at the intersection of classical tailoring and contemporary brutalist aesthetics. Every garment is a study in volume, drape, and texture.
          </p>
          <p className={styles.text}>
            We reject seasonal excess in favor of a permanent collection—pieces designed to be worn, lived in, and passed down across decades.
          </p>
        </div>
        <div>
          <h2 className={styles.sectionTitle}>Ethical Provenance</h2>
          <p className={styles.text}>
            Our materials are sourced directly from historic mills in northern Italy, ethical tanneries in Florence, and independent artisan collectives who share our obsession with detail.
          </p>
          <p className={styles.text}>
            From hand-stitched structural canvas interlinings to organic vegetable-tanned leathers, our supply chain is entirely transparent and deliberate.
          </p>
        </div>
      </div>

      <div className={styles.quoteSection}>
        "True luxury is not about being noticed; it is about being remembered for the precision of your silhouette and the integrity of your materials."
      </div>
    </div>
  );
};

export default About;