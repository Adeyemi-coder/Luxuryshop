import React from 'react';

const ShippingForm = ({ shippingData, setShippingData, shippingMethod, setShippingMethod }) => {
  const handleChange = (e) => {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-light)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--text-main)',
    fontSize: 'var(--text-sm)',
    outline: 'none',
    transition: 'border-color var(--transition-fast)'
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-surface)', padding: 'var(--space-6)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: '500', marginBottom: 'var(--space-6)', color: 'var(--text-main)' }}>
        1. Shipping Destination & Carrier
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px', color: 'var(--text-muted)' }}>Email Address (For Tracking & Receipts)</label>
          <input required type="email" name="email" value={shippingData.email} onChange={handleChange} placeholder="concierge@luxury.com" style={inputStyle} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px', color: 'var(--text-muted)' }}>First Name</label>
            <input required type="text" name="firstName" value={shippingData.firstName} onChange={handleChange} placeholder="Alexander" style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px', color: 'var(--text-muted)' }}>Last Name</label>
            <input required type="text" name="lastName" value={shippingData.lastName} onChange={handleChange} placeholder="Wright" style={inputStyle} />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px', color: 'var(--text-muted)' }}>Street Address</label>
          <input required type="text" name="address" value={shippingData.address} onChange={handleChange} placeholder="742 Evergreen Terrace, Suite 400" style={inputStyle} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-4)' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px', color: 'var(--text-muted)' }}>City</label>
            <input required type="text" name="city" value={shippingData.city} onChange={handleChange} placeholder="New York" style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px', color: 'var(--text-muted)' }}>Country</label>
            <input required type="text" name="country" value={shippingData.country} onChange={handleChange} style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px', color: 'var(--text-muted)' }}>Postal Code</label>
            <input required type="text" name="postalCode" value={shippingData.postalCode} onChange={handleChange} placeholder="10001" style={inputStyle} />
          </div>
        </div>

        {/* Delivery Speed Options */}
        <div style={{ marginTop: 'var(--space-4)' }}>
          <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 'var(--space-3)', color: 'var(--text-muted)' }}>Select Courier Service</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
            <div 
              onClick={() => setShippingMethod('standard')}
              style={{ padding: 'var(--space-4)', borderRadius: 'var(--radius-sm)', border: shippingMethod === 'standard' ? '2px solid var(--text-main)' : '1px solid var(--border-light)', cursor: 'pointer', background: 'var(--bg-primary)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontWeight: '600', fontSize: 'var(--text-xs)' }}>Complimentary Courier</span>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-gold)' }}>Free</span>
              </div>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Arrives in 3–5 business days</p>
            </div>

            <div 
              onClick={() => setShippingMethod('express')}
              style={{ padding: 'var(--space-4)', borderRadius: 'var(--radius-sm)', border: shippingMethod === 'express' ? '2px solid var(--text-main)' : '1px solid var(--border-light)', cursor: 'pointer', background: 'var(--bg-primary)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontWeight: '600', fontSize: 'var(--text-xs)' }}>Priority White-Glove</span>
                <span style={{ fontSize: 'var(--text-xs)' }}>$45</span>
              </div>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Guaranteed next-day delivery</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShippingForm;