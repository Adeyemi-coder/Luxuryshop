import React from 'react';
import Hero from '../components/home/Hero';
import Marquee from '../components/home/Marquee';
import CategoryGrid from '../components/home/CategoryGrid';
import Hero3DCard from '../components/home/Hero3DCard';
import DropBanner from '../components/home/DropBanner';
import ProductSection from '../components/home/ProductSection';
import LuxuryBanner from '../components/home/LuxuryBanner';
import EditorialAccordion from '../components/home/EditorialAccordion';
import CraftsmanshipBanner from '../components/home/CraftsmanshipBanner';
import SocialLookbook from '../components/home/SocialLookbook';
import JournalSection from '../components/home/JournalSection';
import HomeFAQ from '../components/home/HomeFAQ';
import ManifestoDivider from '../components/home/ManifestoDivider';
import CinematicBanner from '../components/home/CinematicBanner';

const Home = ({ activeCategory, onSelectCategory, onAddToCart, onNavigate, onSelectProduct }) => {
  const handleCategorySelect = (categoryKey) => {
    if (onSelectCategory) onSelectCategory(categoryKey);
    if (onNavigate) onNavigate('shop');
  };

  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <Marquee />
      
      {/* Interactive Editorial Accordion Showcase */}
      <EditorialAccordion onNavigate={onNavigate} />

      {/* Cinematic Full-Width Manifesto Divider */}
      <ManifestoDivider />

      <CategoryGrid onSelectCategory={handleCategorySelect} />

      {/* Atelier Story / Craftsmanship Banner */}
      <CraftsmanshipBanner onNavigate={onNavigate} />

      <Hero3DCard onNavigate={onNavigate} onAddToCart={onAddToCart} />

      {/* Full-Width Cinematic Runway Banner */}
      <CinematicBanner onNavigate={onNavigate} />

      <DropBanner onNavigate={onNavigate} />

      <ProductSection 
        activeCategory={activeCategory} 
        onSelectCategory={onSelectCategory} 
        onAddToCart={onAddToCart}
        onSelectProduct={onSelectProduct}
      />

      {/* Community Instagram Lookbook Grid */}
      <SocialLookbook onNavigate={onNavigate} />

      {/* Maison Journal & Stories */}
      <JournalSection onNavigate={onNavigate} />

      {/* Client Care & FAQ */}
      <HomeFAQ />

      <LuxuryBanner />
    </div>
  );
};

export default Home;