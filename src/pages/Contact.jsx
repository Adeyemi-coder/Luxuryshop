import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.subtitle}>Client Services</p>
        <h1 className={styles.title}>Atelier Inquiries</h1>
        <p className={styles.description}>
          For private appointments, bespoke commissions, or client care inquiries, our concierge team is at your disposal.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Contact Information */}
        <div className={styles.infoColumn}>
          <div className={styles.infoBlock}>
            <h3>Flagship Boutique</h3>
            <p>Via Monte Napoleone 18<br />20121 Milan, Italy</p>
          </div>
          <div className={styles.infoBlock}>
            <h3>Direct Concierge</h3>
            <p>concierge@vogueandvault.com<br />+39 02 555 0192</p>
          </div>
          <div className={styles.infoBlock}>
            <h3>Hours</h3>
            <p>Monday — Saturday<br />10:00 — 19:00 CET</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className={styles.formColumn}>
          {submitted && (
            <div className={styles.successMessage}>
              ✓ Message transmitted. Our concierge will respond shortly.
            </div>
          )}

          <div className={styles.inputGroup}>
            <label className={styles.label}>Full Name</label>
            <input 
              type="text" 
              required
              className={styles.input} 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Alexander Vance"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <input 
              type="email" 
              required
              className={styles.input} 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="vance@atelier.com"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Message / Commission Details</label>
            <textarea 
              required
              className={styles.textarea}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Inquire about sizing, custom tailoring, or order status..."
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Inquiry →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;