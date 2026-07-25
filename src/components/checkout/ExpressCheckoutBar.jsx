import React from 'react';

const ExpressCheckoutBar = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-surface)', padding: 'var(--space-6)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
      <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}>
        Instant Express Checkout
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-3)' }}>
        <button type="button" onClick={() => alert('Apple Pay simulation initialized.')} style={{ background: '#000', color: '#fff', padding: '12px', borderRadius: 'var(--radius-sm)', border: 'none', fontWeight: '600', fontSize: '0.75rem', cursor: 'pointer' }}>
          Apple Pay
        </button>
        <button type="button" onClick={() => alert('Google Pay simulation initialized.')} style={{ background: '#fff', color: '#000', border: '1px solid var(--border-dark)', padding: '12px', borderRadius: 'var(--radius-sm)', fontWeight: '600', fontSize: '0.75rem', cursor: 'pointer' }}>
          Google Pay
        </button>
        <button type="button" onClick={() => alert('PayPal Vault simulation initialized.')} style={{ background: '#0070BA', color: '#fff', padding: '12px', borderRadius: 'var(--radius-sm)', border: 'none', fontWeight: '600', fontSize: '0.75rem', cursor: 'pointer' }}>
          PayPal
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
        <span style={{ height: '1px', background: 'var(--border-light)', flex: 1 }}></span>
        <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)' }}>Or Enter Secure Details Below</span>
        <span style={{ height: '1px', background: 'var(--border-light)', flex: 1 }}></span>
      </div>
    </div>
  );
};

export default ExpressCheckoutBar;