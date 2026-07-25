import React, { useState } from 'react';
import styles from './HomeFAQ.module.css';

const faqs = [
  {
    q: 'How do private salon appointments work?',
    a: 'Appointments can be requested via our Concierge or Contact page. We host private viewings at our Milan flagship or virtual curated fittings for international patrons.'
  },
  {
    q: 'What is the construction timeline for bespoke garments?',
    a: 'Because our silhouettes rely on hand-canvas interlining and traditional tailoring, standard commissions require between 3 to 5 weeks prior to dispatch.'
  },
  {
    q: 'Are returns accepted on archival releases?',
    a: 'We offer complimentary exchanges and store credit within 14 days of delivery. Bespoke custom-tailored orders are final sale.'
  },
  {
    q: 'How should I care for vegetable-tanned leather goods?',
    a: 'Keep items away from direct moisture and prolonged sunlight. Nourish periodically with a neutral artisan leather balm to preserve natural patina development.'
  }
];

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.subtitle}>Inquiries & Assistance</p>
        <h2 className={styles.title}>Frequently Addressed</h2>
      </div>

      <div className={styles.accordion}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={styles.item}>
              <button onClick={() => toggleFAQ(index)} className={styles.questionBtn}>
                <span>{faq.q}</span>
                <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>+</span>
              </button>
              {isOpen && <div className={styles.answer}>{faq.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeFAQ;