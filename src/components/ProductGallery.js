// src/components/ProductGallery.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Filter from './Filter';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import './ProductGallery.css';

const products = [
  { id: 1, name: 'Twin Cake with Chocolate and Fruit', price: 20.60, onSale: true, image: '/images/photo_1.png', isVisible: true, type:'Cake', },
  { id: 2, name: 'Vanilla Cake with Fruit Garnish', price: 25.00, onSale: false, image: '/images/photo_2.png', isVisible: true, type:'Cake',  },
  { id: 3, name: 'Vanilla Cake with Strawberry', price: 25.50, onSale: true, image: '/images/photo_3.png', isVisible: true, type:'Cake', },
  { id: 4, name: 'Delicious Chocolate Cake', price: 19.99, onSale: true, image: '/images/photo_4.png', isVisible: true, type:'Cake', },
  { id: 5, name: 'Fresh Strawberry tart with Cream Filling', price: 6.00, onSale: false, image: '/images/photo_5.png', isVisible: true,  type:'Tart',},
  { id: 6, name: 'Strawberry Cheesecake ', price: 9.00, onSale: true, image: '/images/photo_6.png', isVisible: true,  type:'Cheesecake',},
  { id: 7, name: 'Fresh Raspberry Tart with Cream Filling', price: 7.50, onSale: false, image: '/images/photo_7.png', isVisible: true, type:'Tart', },
  { id: 8, name: 'Chocolate Eclair with Cream Filling', price: 2.00, onSale: true, image: '/images/photo_8.png', isVisible: true,  type:'Eclair',},
  { id: 9, name: 'Standard Box of Cake 10 piece ', price: 30.00, onSale: true, image: '/images/photo_9.png', isVisible: true, type:'Cake', },
  { id: 10, name: 'Standard Box of Eclair', price: 25.00, onSale: false, image: '/images/photo_10.png', isVisible: true, type:'Eclair', },
];

function ProductGallery({ searchQuery }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState(null);
  const { translations } = useLanguage();
  const { addToCart } = useCart();

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <div className="product-gallery">
      <Filter 
        products={products} 
        setFilteredProducts={setFilteredProducts} 
        sortBy={sortBy} 
        setSortBy={setSortBy} 
      />
      <div className="gallery">
        {filteredProducts
          .filter((product) => product.isVisible)
          .map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
      </div>
    </div>
  );
}

export default ProductGallery;
