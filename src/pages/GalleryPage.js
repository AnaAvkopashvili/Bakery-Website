import React from 'react';
import Navbar from '../components/Navbar';
import './GalleryPage.css';

const galleryItems = [
  { id: 1, title: 'Twin Cake with Chocolate and Fruit', image: '/images/photo_1.png' },
  { id: 2, title: 'Vanilla Cake with Fruit Garnish', image: '/images/photo_2.png' },
  { id: 3, title: 'Vanilla Cake with Strawberry', image: '/images/photo_3.png' },
  { id: 4, title: 'Delicious Chocolate Cake', image: '/images/photo_4.png' },
  { id: 5, title: 'Fresh Strawberry tart with Cream Filling', image: '/images/photo_5.png' },
  { id: 6, title: 'Strawberry Cheesecake ', image: '/images/photo_6.png' },
  { id: 7, title: 'Fresh Raspberry Tart with Cream Filling', image: '/images/photo_7.png' },
  { id: 8, title: 'Chocolate Eclair with Cream Filling', image: '/images/photo_8.png' },
  { id: 9, title: 'Standard Box of Cake 10 piece ', image: '/images/photo_9.png' },
  { id: 10, title: 'Standard Box of Eclair', image: '/images/photo_10.png' },
];

function GalleryPage() {
  return (
    <div className="gallery-page">
      <Navbar />
      <div className="gallery-container">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt={item.title} className="gallery-image" />
            <h3 className="gallery-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
