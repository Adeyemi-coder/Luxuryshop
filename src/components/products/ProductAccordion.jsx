import React, { useState } from 'react';

const AccordionItem = ({ title, isOpen, onToggle, children }) => (
  <div style={{ borderBottom: '1px solid var(--border-light)' }}>
    <button
      onClick={onToggle}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'var(--space-5) 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left'
      }}
    >
      <span style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: '600', color: 'var(--text-main)' }}>
        {title}
      </span>
      <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-main)' }}>{isOpen ? '−' : '+'}</span>
    </button>
    {isOpen && (
      <div style={{ paddingBottom: 'var(--space-6)', fontSize: 'var(--text-sm)', color: 'var(--text-main)', lineHeight: '1.8', opacity: 0.85 }}>
        {children}
      </div>
    )}
  </div>
);

const ProductAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const sections = [
    {
      title: 'Composition & Craftsmanship',
      content: 'Executed from 100% certified organic Italian virgin wool with a hand-polished cupro lining. Constructed using traditional sartorial floating canvas techniques to ensure a flawless structural hang and enduring durability.'
    },
    {
      title: 'Size & Fit Guidance',
      content: 'Designed for a structured, architectural silhouette. Fits true to size; we recommend taking your standard sizing. For tailored adjustments, consult our digital concierge or local atelier.'
    },
    {
      title: 'Shipping & Complimentary Returns',
      content: 'All orders qualify for complimentary express global shipping in our signature archival packaging. We offer effortless 30-day returns with prepaid return courier pickup.'
    },
    {
      title: 'Care Instructions',
      content: 'Specialist dry clean only. Do not machine wash or tumble dry. Steam at low temperature using a pressing cloth to preserve the integrity of the Italian fibers.'
    }
  ];

  return (
    <div style={{ marginTop: 'var(--space-8)', borderTop: '1px solid var(--border-light)' }}>
      {sections.map((section, idx) => (
        <AccordionItem
          key={section.title}
          title={section.title}
          isOpen={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
        >
          {section.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default ProductAccordion;