import React from 'react';
import styles from './LuxuryBanner.module.css';

const LuxuryBanner = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.tagline}>The Vault Club</p>
          <h2 className={styles.title}>An Invitation to Distinction</h2>
          <p className={styles.text}>
            Join our private registry to receive early access to bespoke releases, private lookbooks, and invitation-only runway presentations.
          </p>
          
          <form className={styles.inputGroup} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address..." 
              className={styles.input}
              required 
            />
            <button type="submit" className={styles.submitBtn}>
              Join →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LuxuryBanner;