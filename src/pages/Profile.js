// src/pages/Profile.js
import React from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../contexts/LanguageContext';
import './Profile.css';

const userProfile = {
  name: 'Ana Avkopashvili',
  email: 'Avkopashvili.ana@kiu.edu.ge',
  profilePicture: '/images/cat.jpg',
  address: {
    street: 'First street',
    city: 'Kutaisi',
    country: 'Georgia',
    zip: '6400'
  }
};

function Profile() {
  const { translations } = useLanguage();

  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-card">
        <img src={userProfile.profilePicture} alt="Profile" className="profile-picture" />
        <h2>{userProfile.name}</h2>
        <p>{translations.email}: {userProfile.email}</p>
        <h3>{translations.address}:</h3>
        <p>{userProfile.address.street}</p>
        <p>{userProfile.address.city}, {userProfile.address.state} {userProfile.address.zip}</p>
        <a href="https://www.pinterest.com/search/pins/?q=cats&rs=typed" target="_blank" rel="noopener noreferrer">Cats</a>
      </div>
    </div>
  );
}

export default Profile;
