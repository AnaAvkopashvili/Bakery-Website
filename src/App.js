// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext'; // Add this import
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Profile from './pages/Profile';
import ContactPage from './pages/ContactPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import CartPage from './pages/CartPage'; 
import GalleryPage from './pages/GalleryPage';


function App() {
  return (
    <LanguageProvider>
      <CartProvider> 
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<CartPage />} /> 
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
