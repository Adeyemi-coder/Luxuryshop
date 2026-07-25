import React, { useState, useEffect } from 'react';
import CheckoutStepper from '../components/checkout/CheckoutStepper';
import ExpressCheckoutBar from '../components/checkout/ExpressCheckoutBar';
import ShippingForm from '../components/checkout/ShippingForm';
import PaymentForm from '../components/checkout/PaymentForm';
import OrderSummarySidebar from '../components/checkout/OrderSummarySidebar';
import TrustSecurityBadges from '../components/checkout/TrustSecurityBadges';

const Checkout = ({ cartItems, onNavigate, onClearCart }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Form State Management
  const [shippingData, setShippingData] = useState({
    email: '', firstName: '', lastName: '', address: '', city: '', country: 'United States', postalCode: '', phone: ''
  });
  
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [shippingMethod, setShippingMethod] = useState('standard'); // 'standard' | 'express'
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  // Calculations
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shippingCost = shippingMethod === 'express' ? 45 : (subtotal > 1000 ? 0 : 35);
  const discountAmount = discountApplied ? subtotal * 0.1 : 0; // 10% VIP discount example
  const estimatedTax = (subtotal - discountAmount) * 0.085; // 8.5% luxury goods tax estimation
  const grandTotal = subtotal - discountAmount + shippingCost + estimatedTax;

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    if (!shippingData.email || !shippingData.address) {
      alert('Please fill in all mandatory shipping destination fields.');
      return;
    }
    alert('Vault Transaction Authorized Successfully. Welcome to Vogue & Vault.');
    if (onClearCart) onClearCart();
    if (onNavigate) onNavigate('home');
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', padding: 'var(--space-8) 0 var(--space-24) 0' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        
        {/* Top Header & Stepper */}
        <header style={{ marginBottom: 'var(--space-10)', textAlign: 'center' }}>
          <button 
            onClick={() => onNavigate('shop')}
            style={{ background: 'none', border: 'none', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-muted)', cursor: 'pointer', marginBottom: 'var(--space-4)' }}
          >
            ← Return to Bag & Catalog
          </button>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: '400', letterSpacing: '0.05em', color: 'var(--text-main)' }}>
            Secure Vault Checkout
          </h1>
          <CheckoutStepper currentStep={2} />
        </header>

        {/* Master Two-Column Desktop Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-12)' }} className="lg-grid-cols-12">
          
          {/* Left Column: Forms & Inputs (Span 7 cols on Desktop) */}
          <div style={{ gridColumn: 'span 7' }} className="lg-col-span-7">
            <form onSubmit={handleCompleteOrder} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
              
              {/* Instant Express Wallet Pay */}
              <ExpressCheckoutBar />

              {/* Shipping Form Section */}
              <ShippingForm 
                shippingData={shippingData} 
                setShippingData={setShippingData}
                shippingMethod={shippingMethod}
                setShippingMethod={setShippingMethod}
              />

              {/* Payment Form Section */}
              <PaymentForm 
                sameAsShipping={sameAsShipping}
                setSameAsShipping={setSameAsShipping}
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                discountApplied={discountApplied}
                setDiscountApplied={setDiscountApplied}
              />

              {/* Trust & Guarantees */}
              <TrustSecurityBadges />

              {/* Master Submit Button for Mobile / Backup */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: 'var(--text-main)',
                  color: 'var(--bg-primary)',
                  padding: 'var(--space-5)',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  fontSize: 'var(--text-xs)',
                  cursor: 'pointer',
                  border: 'none',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  transition: 'all var(--transition-normal)',
                  display: 'block'
                }}
              >
                Authorize & Place Order — {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(grandTotal)}
              </button>

            </form>
          </div>

          {/* Right Column: Sticky Order Summary Sidebar (Span 5 cols on Desktop) */}
          <div style={{ gridColumn: 'span 5' }} className="lg-col-span-5">
            <OrderSummarySidebar 
              cartItems={cartItems}
              subtotal={subtotal}
              discountAmount={discountAmount}
              shippingCost={shippingCost}
              estimatedTax={estimatedTax}
              grandTotal={grandTotal}
              shippingMethod={shippingMethod}
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Checkout;