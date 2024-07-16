import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductGallery from '../components/ProductGallery';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { FaFacebook, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './HomePage.css';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { translations } = useLanguage();
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="home-page">
      <Navbar onSearch={handleSearch} />
      <div className="home-actions">
      <Link to="/signup" className="action-link"><FaUserPlus title={translations.signup} /></Link>
      <Link to="/login" className="action-link"><FaSignInAlt title={translations.login} /></Link>
        <Link to="https://facebook.com" className="fb-link" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </Link>
      </div>
      <ProductGallery searchQuery={searchQuery} />
    </div>
  );
}

export default HomePage;