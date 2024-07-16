// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const { translations } = useLanguage();
  const { cartItems } = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();


  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch && typeof onSearch === 'function') {
      onSearch(query);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      <Link to="/">{translations.home}</Link>
      <Link to="/profile">{translations.profile}</Link>
      <Link to="/cart" className="cart-link">
        {translations.cart}
        {cartItemCount > 0 && (
          <span className="cart-count">{cartItemCount}</span>
        )}
      </Link>
      <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        <span className="dropdown-title">{translations.more}</span>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <Link to="/contact">{translations.contact}</Link>
            <Link to="/gallery">{translations.gallery}</Link>
          </div>
        )}
      </div>
      <input
        type="text"
        placeholder={translations.search}
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <LanguageSwitcher />
    </nav>
  );
}

export default Navbar;
