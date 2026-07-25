import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ onNavigate, onSelectCategory }) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* We use our reusable .grid-4 utility class from layout.css! */}
        <div className="grid-4">
          
          {/* Column 1: Brand Story */}
          <div>
            <h3 className={styles.colTitle} onClick={() => onNavigate && onNavigate('home')} style={{ cursor: 'pointer' }}>
              Vogue & Vault
            </h3>
            <p className={styles.text}>
              Crafting high-end, sophisticated fashion pieces for discerning individuals. Defined by minimalist editorial design and uncompromising quality.
            </p>
          </div>

          {/* Column 2: Shop Catalog */}
          <div>
            <h3 className={styles.colTitle}>Collections</h3>
            <ul className={styles.linkList}>
              <li>
                <button 
                  onClick={() => { if(onSelectCategory) onSelectCategory('Clothing'); if(onNavigate) onNavigate('shop'); }} 
                  className={styles.link} 
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                >
                  Ready to Wear
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { if(onSelectCategory) onSelectCategory('Shoes'); if(onNavigate) onNavigate('shop'); }} 
                  className={styles.link} 
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                >
                  Luxury Footwear
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { if(onSelectCategory) onSelectCategory('Accessories'); if(onNavigate) onNavigate('shop'); }} 
                  className={styles.link} 
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                >
                  Leather Accessories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { if(onNavigate) onNavigate('shop'); }} 
                  className={styles.link} 
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                >
                  Full Catalog
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Experience */}
          <div>
            <h3 className={styles.colTitle}>Client Service</h3>
            <ul className={styles.linkList}>
              <li>
                <button 
                  onClick={() => onNavigate && onNavigate('about')} 
                  className={styles.link} 
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                >
                  About the Maison
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate && onNavigate('logbook')} 
                  className={styles.link} 
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                >
                  Private Lookbook
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate && onNavigate('contact')} 
                  className={styles.link} 
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                >
                  Private Concierge
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate && onNavigate('contact')} 
                  className={styles.link} 
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                >
                  Inquiries & Care
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Quick Navigate */}
          <div>
            <h3 className={styles.colTitle}>The Vault Club</h3>
            <p className={styles.text}>
              Subscribe to receive private invitations to seasonal presentations and editorial releases.
            </p>
            <button 
              onClick={() => onNavigate && onNavigate('contact')}
              style={{ marginTop: 'var(--space-4)', background: 'none', border: '1px solid var(--text-main)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', cursor: 'pointer', color: 'var(--text-main)' }}
            >
              Join Club
            </button>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Vogue & Vault. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button onClick={() => onNavigate && onNavigate('about')} className={styles.link} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              Privacy Policy
            </button>
            <button onClick={() => onNavigate && onNavigate('about')} className={styles.link} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;