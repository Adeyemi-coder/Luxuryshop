import React from 'react';

const CheckoutStepper = ({ currentStep }) => {
  const steps = ['1. Shopping Bag', '2. Secure Checkout', '3. Confirmation'];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-6)', marginTop: 'var(--space-4)' }}>
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isActive = stepNum === currentStep;
        const isCompleted = stepNum < currentStep;

        return (
          <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span style={{
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: isActive || isCompleted ? '600' : '400',
              color: isActive ? 'var(--accent-gold)' : (isCompleted ? 'var(--text-main)' : 'var(--text-muted)')
            }}>
              {step}
            </span>
            {index < steps.length - 1 && <span style={{ color: 'var(--border-dark)', fontSize: '0.7rem' }}>/</span>}
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutStepper;