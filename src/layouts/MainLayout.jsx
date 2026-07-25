import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';

// We accept onNavigate and pass it down to both Navbar and Footer!
const MainLayout = ({ children, onSelectCategory, cartCount, onOpenCart, onNavigate }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar 
        onSelectCategory={onSelectCategory} 
        cartCount={cartCount} 
        onOpenCart={onOpenCart}
        onNavigate={onNavigate} 
      />

      <main style={{ flex: 1 }}>
        {children}
      </main>

      <Footer 
        onNavigate={onNavigate} 
      />
    </div>
  );
};

export default MainLayout;