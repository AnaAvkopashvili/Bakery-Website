// src/components/LanguageSwitcher.js
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ReactCountryFlag from 'react-country-flag';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { switchLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button onClick={() => switchLanguage('en')}>
        <ReactCountryFlag countryCode="GB" svg style={{ width: '2em', height: '2em' }} />
      </button>
      <button onClick={() => switchLanguage('ge')}>
        <ReactCountryFlag countryCode="GE" svg style={{ width: '2em', height: '2em' }} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
