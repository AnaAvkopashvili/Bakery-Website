// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  const { translations } = useLanguage();

  const handleAddToCart = () => {
    if (!product.onSale) {
      console.log('This product is out of stock.');
      return;
    }
    addToCart(product);
  };
  return (
    <div className="product-card">
      {product.onSale ? <span>{translations.sale}</span> : <span className="unavailable">{translations.unavailable}</span>}
      <h3>{product.name}</h3>
      <div className="bottom-section">

      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
        <p>{product.price} USD</p>
        <button onClick={handleAddToCart} disabled={!product.onSale}>
          {translations.addToCart}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
