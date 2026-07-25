import React, { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import LogBookView from './components/logbook/LogBookView';
import CartDrawer from './components/cart/CartDrawer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // 1. Initialize Cart State from localStorage (or fallback to an empty array)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('vogue_vault_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Failed to load cart from storage:', error);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // 2. Automatically save to localStorage whenever cartItems change
  useEffect(() => {
    try {
      localStorage.setItem('vogue_vault_cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Failed to save cart to storage:', error);
    }
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage('detail');
  };

  return (
    <>
      <MainLayout 
        onSelectCategory={setActiveCategory}
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={setCurrentPage}
      >
        {currentPage === 'home' && (
          <Home 
            activeCategory={activeCategory} 
            onSelectCategory={setActiveCategory} 
            onAddToCart={handleAddToCart}
            onNavigate={setCurrentPage}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage === 'shop' && (
          <Shop 
            activeCategory={activeCategory} 
            onSelectCategory={setActiveCategory} 
            onAddToCart={handleAddToCart}
            onNavigate={setCurrentPage}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage === 'detail' && (
          <ProductDetail 
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onNavigate={setCurrentPage}
          />
        )}

        {currentPage === 'logbook' && (
          <LogBookView 
            onNavigate={setCurrentPage}
          />
        )}

        {currentPage === 'about' && (
          <About />
        )}

        {currentPage === 'contact' && (
          <Contact />
        )}

        {currentPage === 'checkout' && (
          <Checkout 
            cartItems={cartItems}
            onNavigate={setCurrentPage}
            onClearCart={() => setCartItems([])}
          />
        )}
      </MainLayout>

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => setCurrentPage('checkout')}
      />
    </>
  );
}

export default App;