import React from 'react';

const PaymentForm = ({ sameAsShipping, setSameAsShipping, promoCode, setPromoCode, discountApplied, setDiscountApplied }) => {
  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-light)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--text-main)',
    fontSize: 'var(--text-sm)',
    outline: 'none'
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-surface)', padding: 'var(--space-6)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: '500', marginBottom: 'var(--space-6)', color: 'var(--text-main)' }}>
        2. Encrypted Payment & Privileges
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        
        {/* Credit Card Mock Input */}
        <div>
          <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px', color: 'var(--text-muted)' }}>Card Number</label>
          <input required type="text" placeholder="•••• •••• •••• ••••" style={inputStyle} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px', color: 'var(--text-muted)' }}>Expiration Date</label>
            <input required type="text" placeholder="MM / YY" style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px', color: 'var(--text-muted)' }}>CVV / Security Code</label>
            <input required type="password" placeholder="CVV" maxLength={4} style={inputStyle} />
          </div>
        </div>

        {/* Promo Code Expandable Section */}
        <div style={{ marginTop: 'var(--space-2)' }}>
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <input 
              type="text" 
              placeholder="Enter VIP Promo Code (e.g., VIP10)" 
              value={promoCode} 
              onChange={(e) => setPromoCode(e.target.value)} 
              style={{ ...inputStyle, flex: 1 }} 
            />
            <button 
              type="button" 
              onClick={() => {
                if (promoCode.toUpperCase() === 'VIP10') {
                  setDiscountApplied(true);
                  alert('VIP 10% Privileged Discount Applied.');
                } else {
                  alert('Invalid promotional code.');
                }
              }}
              style={{ padding: '0 20px', background: 'var(--text-main)', color: 'var(--bg-primary)', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}
            >
              Apply
            </button>
          </div>
          {discountApplied && <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', marginTop: '4px', display: 'block' }}>✓ 10% VIP Privilege active</span>}
        </div>

        {/* Billing Address Checkbox */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
          <input 
            type="checkbox" 
            id="sameBilling" 
            checked={sameAsShipping} 
            onChange={(e) => setSameAsShipping(e.target.checked)}
            style={{ width: '16px', height: '16px', accentColor: 'var(--text-main)', cursor: 'pointer' }}
          />
          <label htmlFor="sameBilling" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-main)', cursor: 'pointer' }}>
            Billing address is the same as shipping address
          </label>
        </div>

      </div>
    </div>
  );
};

export default PaymentForm;