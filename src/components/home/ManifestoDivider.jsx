import React from 'react';
import styles from './ManifestoDivider.module.css';

const ManifestoDivider = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className={styles.subtitle}>Permanent Collection Manifesto</span>
        <blockquote className={styles.quote}>
          "Form follows feeling. We sculpt garments not to follow fleeting trends, but to create a permanent armor of quiet confidence."
        </blockquote>
        <span className={styles.author}>Vogue & Vault Atelier — Milan</span>
      </div>
    </section>
  );
};

export default ManifestoDivider;