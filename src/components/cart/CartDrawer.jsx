import React from 'react';
import styles from './CartDrawer.module.css';

const CartDrawer = ({ isOpen, onClose, cartItems, onRemoveItem, onCheckout }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(totalPrice);

  const handleCheckoutClick = () => {
    if (cartItems.length === 0) {
      alert('Your bag is empty.');
      return;
    }
    
    // Close the drawer and trigger the master navigation to the checkout page!
    if (onClose) onClose();
    if (onCheckout) onCheckout();
  };

  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} 
        onClick={onClose}
      />

      <aside className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        
        <header className={styles.header}>
          <h2 className={styles.title}>Shopping Bag ({cartItems.length})</h2>
          <button onClick={onClose} className={styles.closeBtn}>Close ✕</button>
        </header>

        <div className={styles.itemList}>
          {cartItems.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: 'var(--space-12)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Your bag is currently empty.
            </p>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                
                <div className={styles.itemInfo}>
                  <div>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemPrice}>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(item.price)}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => onRemoveItem(index)} 
                    className={styles.removeBtn}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <footer className={styles.footer}>
            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>Subtotal</span>
              <span className={styles.totalAmount}>{formattedTotal}</span>
            </div>
            
            <button 
              className={styles.checkoutBtn} 
              onClick={handleCheckoutClick}
              style={{
                width: '100%',
                backgroundColor: 'var(--text-main)',
                color: 'var(--bg-primary)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-full)',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontSize: 'var(--text-xs)',
                cursor: 'pointer',
                border: 'none',
                transition: 'all var(--transition-normal)'
              }}
            >
              Proceed to Secure Checkout →
            </button>
          </footer>
        )}

      </aside>
    </>
  );
};

export default CartDrawer;