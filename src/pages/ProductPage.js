import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useLanguage } from '../contexts/LanguageContext';
import './ProductPage.css';

const products = [
  { id: 1, name: 'Twin Cake with Chocolate and Fruit', price: 41.60, onSale: true, image: '/images/photo_1.png', isVisible: true, descriptionFile: '/descriptions/description_1.txt', },
  { id: 2, name: 'Vanilla Cake with Fruit Garnish', price: 25.00, onSale: false, image: '/images/photo_2.png', isVisible: true, descriptionFile: '/descriptions/description_2.txt', },
  { id: 3, name: 'Vanilla Cake with Strawberry', price: 25.50, onSale: true, image: '/images/photo_3.png', isVisible: true, descriptionFile: '/descriptions/description_3.txt', },
  { id: 4, name: 'Delicious Chocolate Cake', price: 19.99, onSale: true, image: '/images/photo_4.png', isVisible: true, descriptionFile: '/descriptions/description_4.txt', },
  { id: 5, name: 'Fresh Strawberry tart with Cream Filling', price: 6.00, onSale: false, image: '/images/photo_5.png', isVisible: true, descriptionFile: '/descriptions/description_5.txt', },
  { id: 6, name: 'Strawberry Cheesecake ', price: 9.00, onSale: true, image: '/images/photo_6.png', isVisible: true, descriptionFile: '/descriptions/description_6.txt', },
  { id: 7, name: 'Fresh Raspberry Tart with Cream Filling', price: 7.50, onSale: false, image: '/images/photo_7.png', isVisible: true, descriptionFile: '/descriptions/description_7.txt', },
  { id: 8, name: 'Chocolate Eclair with Cream Filling', price: 2.00, onSale: true, image: '/images/photo_8.png', isVisible: true, descriptionFile: '/descriptions/description_8.txt', },
  { id: 9, name: 'Standard Box of Cake 10 piece ', price: 30.00, onSale: true, image: '/images/photo_9.png', isVisible: true,descriptionFile: '/descriptions/description_9.txt', },
  { id: 10, name: 'Standard Box of Eclair', price: 25.00, onSale: false, image: '/images/photo_10.png', isVisible: true, descriptionFile: '/descriptions/description_10.txt', },
  
];


function ProductPage() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const { translations } = useLanguage();
    const [description, setDescription] = useState('');
  
    useEffect(() => {
      fetch(product.descriptionFile)
        .then(response => response.text())
        .then(text => setDescription(text))
        .catch(error => console.error('Error fetching product description:', error));
    }, [product.descriptionFile]);
  
    const renderDescription = () => {
      return description.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ));
    };
  
    return (
      <div className="product-page">
        <Navbar />
        <div className="product-details">
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <div className="product-description">
            {renderDescription()}
          </div>
          <p>{product.price} USD</p>
          {product.onSale && <span>{translations.sale}</span>}
        </div>
      </div>
    );
  }
  
  export default ProductPage;