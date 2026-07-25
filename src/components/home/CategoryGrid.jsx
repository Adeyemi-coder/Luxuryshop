import React from 'react';
import styles from './CategoryGrid.module.css';

const categories = [
  { 
    id: 1, 
    title: 'Ready to Wear', 
    filterKey: 'Ready to Wear',
    count: '14 Pieces', 
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    title: 'Luxury Footwear', 
    filterKey: 'Footwear',
    count: '13 Pieces', 
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    title: 'Eyewear & Optics', 
    filterKey: 'Eyewear',
    count: '12 Pieces', 
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 4, 
    title: 'Leather & Jewelry', 
    filterKey: 'Accessories',
    count: '13 Pieces', 
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop' 
  },
];

const CategoryGrid = ({ onSelectCategory }) => {
  // When a category card is clicked, update state AND scroll smoothly to the shop grid!
  const handleCategoryClick = (filterKey) => {
    onSelectCategory(filterKey);
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        
        <header className={styles.header}>
          <div>
            <p style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)', marginBottom: 'var(--space-1)' }}>
              Departments
            </p>
            <h2 className={styles.title}>Explore by Category</h2>
          </div>
          <button 
            onClick={() => handleCategoryClick('All')} 
            style={{ fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--text-main)', color: 'var(--text-main)', cursor: 'pointer' }}
          >
            View Full Catalog →
          </button>
        </header>

        <div className="grid-4">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className={styles.card}
              onClick={() => handleCategoryClick(cat.filterKey)}
            >
              {/* High-res photography + gradient overlay */}
              <img src={cat.image} alt={cat.title} className={styles.bgImage} loading="lazy" />
              <div className={styles.overlay}></div>
              
              <span className={styles.cardSubtitle}>{cat.count}</span>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoryGrid;