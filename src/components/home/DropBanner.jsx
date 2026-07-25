import React, { useState, useEffect } from 'react';
import styles from './DropBanner.module.css';

const DropBanner = ({ onNavigate }) => {
  // Static countdown simulation (e.g. 14 hours, 22 mins, 45 secs)
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 22, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.dropSection}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>
          <span className={styles.liveDot}></span>
          Limited Vault Release
        </p>
        <h2 className={styles.title}>The Midnight Capsule Drop</h2>
        
        <div className={styles.timerGrid}>
          <div className={styles.timerBox}>
            <span className={styles.timerNumber}>{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className={styles.timerLabel}>Hours</span>
          </div>
          <div className={styles.timerBox}>
            <span className={styles.timerNumber}>{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className={styles.timerLabel}>Minutes</span>
          </div>
          <div className={styles.timerBox}>
            <span className={styles.timerNumber}>{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className={styles.timerLabel}>Seconds</span>
          </div>
        </div>

        <button 
          className={styles.actionBtn}
          onClick={() => {
            if (onNavigate) onNavigate('shop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Explore Limited Capsule →
        </button>
      </div>
    </section>
  );
};

export default DropBanner;