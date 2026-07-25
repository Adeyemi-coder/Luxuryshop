import React from 'react';

const TrustSecurityBadges = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: 'var(--space-4)', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px dashed var(--border-dark)', fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'center' }}>
      <p style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '600', color: 'var(--text-main)' }}>
        🔒 Bank-Grade 256-Bit SSL Vault Encryption
      </p>
      <p>Your transaction is safeguarded by institutional-grade protocols. Enjoy complimentary worldwide returns within 30 days and dedicated 24/7 concierge support.</p>
    </div>
  );
};

export default TrustSecurityBadges;