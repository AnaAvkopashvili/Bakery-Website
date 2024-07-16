// src/components/Filter.js
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Filter.css';

function Filter({ products, setFilteredProducts, sortBy, setSortBy }) {
  const [filter, setFilter] = useState({
    keyword: '',
    priceRange: 'all',
    onSale: 'all',
    type: 'all',
  });
  const { translations } = useLanguage();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    filterProducts(e.target.value);
  };

  const filterProducts = (sortOption) => {
    let filtered = products;

    if (filter.keyword) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(filter.keyword.toLowerCase())
      );
    }

    if (filter.priceRange !== 'all') {
      const [min, max] = filter.priceRange.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= min && product.price <= max);
    }

    if (filter.onSale !== 'all') {
      const onSale = filter.onSale === 'true';
      filtered = filtered.filter(product => product.onSale === onSale);
    }

    if (filter.type !== 'all') {
        filtered = filtered.filter(product => product.type === filter.type);
      }

    if (sortOption) {
      filtered = filtered.sort((a, b) => {
        if (sortOption === 'price-asc') return a.price - b.price;
        if (sortOption === 'price-desc') return b.price - a.price;
        if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
        if (sortOption === 'name-desc') return b.name.localeCompare(a.name);
        return 0;
      });
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts(sortBy);
  }, [filter]);

  return (
    <div className="filter">
      
      <select name="priceRange" value={filter.priceRange} onChange={handleFilterChange} className="filter-input">
        <option value="all">{translations.allPrices}</option>
        <option value="0-2">0 - 2 USD</option>
        <option value="2-20">2 - 20 USD</option>
        <option value="20-25">20 - 25 USD</option>
        <option value="25-30">25 - 30 USD</option>
      </select>
      <select name="onSale" value={filter.onSale} onChange={handleFilterChange} className="filter-input">
        <option value="all">{translations.allAvailability}</option>
        <option value="true">{translations.onSale}</option>
        <option value="false">{translations.notOnSale}</option>
      </select>
      <select name="type" value={filter.type} onChange={handleFilterChange} className="filter-input">
        <option value="all">All Types</option>
        <option value="Tart">Tart</option>
        <option value="Cake">Cake</option>
        <option value="Cheesecake">Cheesecake</option>
        <option value="Eclair">Eclair</option>
      </select>
      <select value={sortBy} onChange={handleSortByChange} className="filter-input">
        <option value={null}>{translations.sortBy}</option>
        <option value="price-asc">{translations.priceAsc}</option>
        <option value="price-desc">{translations.priceDesc}</option>
        <option value="name-asc">{translations.nameAsc}</option>
        <option value="name-desc">{translations.nameDesc}</option>
      </select>
    </div>
  );
}

export default Filter;
