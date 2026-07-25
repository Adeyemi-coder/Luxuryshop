import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

// 4 Distinct High-End Editorial Fashion Images
const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop',
    season: 'Autumn / Winter Release 2026',
    title: 'Quiet Luxury, \n Architectural Form.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1400&auto=format&fit=crop',
    season: 'Bespoke Tailoring',
    title: 'Uncompromising \n Craftsmanship.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1400&auto=format&fit=crop',
    season: 'The Leather Atelier',
    title: 'Sculpted Silhouettes \n & Fine Textures.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1400&auto=format&fit=crop',
    season: 'Editorial Eveningwear',
    title: 'Designed for the \n Discerning Individual.',
  }
];

const Hero = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide rotation every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 4500);

    // Clean up interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section className={styles.hero}>
      {/* 1. Background Image Slider */}
      <div className={styles.sliderContainer}>
        {heroSlides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt="Editorial Slide"
            className={`${styles.slideImage} ${index === currentIndex ? styles.activeSlide : ''}`}
          />
        ))}
      </div>

      {/* 2. Luxury Editorial Overlay */}
      <div className={styles.videoOverlay}></div>

      {/* 3. Typography Content */}
      <div className="container">
        <div className={styles.content}>
          <p className={styles.season}>{currentSlide.season}</p>
          <h1 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
            {currentSlide.title}
          </h1>
          <p className={styles.description}>
            Explore our curated collection of uncompromising tailoring, bespoke Italian leather, and minimalist silhouettes crafted for the modern individual.
          </p>
          <div className={styles.ctaGroup}>
            <button 
              className={styles.primaryBtn}
              onClick={() => {
                const shopSection = document.getElementById('shop');
                if (shopSection) shopSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Collection
            </button>
            <button 
              className={styles.secondaryBtn}
              onClick={() => {
                if (onNavigate) onNavigate('logbook');
              }}
            >
              Private Lookbook
            </button>
          </div>
        </div>
      </div>

      {/* 4. Manual Clickable Pagination Dots */}
      <div className={styles.indicators}>
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;