import React from 'react';

const OrderSummarySidebar = ({ cartItems, subtotal, discountAmount, shippingCost, estimatedTax, grandTotal, shippingMethod }) => {
  const formatCurr = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(val);

  return (
    <div style={{ backgroundColor: 'var(--bg-surface)', padding: 'var(--space-8)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', position: 'sticky', top: '100px' }}>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: '500', marginBottom: 'var(--space-6)', color: 'var(--text-main)', borderBottom: '1px solid var(--border-light)', paddingBottom: 'var(--space-4)' }}>
        Order Summary ({cartItems.length} items)
      </h2>

      {/* Mini Item List */}
      <div style={{ maxHeight: '280px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-6)', paddingRight: '4px' }}>
        {cartItems.map((item, idx) => (
          <div key={`${item.id}-${idx}`} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
            <img src={item.image} alt={item.name} style={{ width: '56px', height: '70px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', background: 'var(--bg-primary)' }} />
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--text-main)', marginBottom: '2px' }}>{item.name}</h4>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Qty: 1</p>
            </div>
            <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-sans)', fontWeight: '600', color: 'var(--text-main)' }}>{formatCurr(item.price)}</span>
          </div>
        ))}
      </div>

      {/* Financial Calculations breakdown */}
      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontSize: 'var(--text-xs)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
          <span>Subtotal</span>
          <span>{formatCurr(subtotal)}</span>
        </div>

        {discountAmount > 0 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-gold)' }}>
            <span>VIP Privilege Discount</span>
            <span>-{formatCurr(discountAmount)}</span>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
          <span>Shipping ({shippingMethod === 'express' ? 'Priority' : 'Complimentary'})</span>
          <span>{shippingCost === 0 ? 'Free' : formatCurr(shippingCost)}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
          <span>Estimated Luxury Tax</span>
          <span>{formatCurr(estimatedTax)}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: '1px solid var(--border-light)', paddingTop: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
          <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '700', color: 'var(--text-main)' }}>Total Due</span>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: '600', color: 'var(--text-main)' }}>{formatCurr(grandTotal)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummarySidebar;