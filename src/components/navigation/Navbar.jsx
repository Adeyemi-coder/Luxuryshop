import React, { useState } from 'react';
import styles from './Navbar.module.css';
import StyleQuiz from '../quiz/StyleQuiz';

const Navbar = ({ cartCount, onOpenCart, onNavigate }) => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.nav}`}>
          
          {/* Brand Logo */}
          <h1 
            className={styles.brand} 
            onClick={() => onNavigate && onNavigate('home')}
            style={{ cursor: 'pointer' }}
          >
            Vogue & Vault
          </h1>

          {/* Center Navigation Links */}
          <nav className={styles.navLinks}>
            <button onClick={() => onNavigate('home')} className={styles.link} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              Home
            </button>
            <button onClick={() => onNavigate('shop')} className={styles.link} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              Catalog
            </button>
            <button onClick={() => onNavigate('logbook')} className={styles.link} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              Private Lookbook
            </button>
            <button 
              onClick={() => setIsQuizOpen(true)} 
              className={styles.link} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-gold)' }}
            >
              Style Quiz
            </button>
            <button onClick={() => onNavigate('about')} className={styles.link} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              About
            </button>
            <button onClick={() => onNavigate('contact')} className={styles.link} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              Contact
            </button>
          </nav>

          {/* Right Actions */}
          <div className={styles.actions}>
            <button 
              onClick={onOpenCart} 
              className={styles.actionBtn}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Bag [{cartCount}]
            </button>
          </div>

        </div>
      </header>

      {/* Style Quiz Modal Overlay */}
      <StyleQuiz 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
        onNavigate={onNavigate} 
      />
    </>
  );
};

export default Navbar;