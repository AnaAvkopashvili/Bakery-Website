import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Login.css';
import { FaFacebook } from 'react-icons/fa'; 

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { translations } = useLanguage();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/profile');
  };

  return (
    <div className="login-page">
      <h2>{translations.login}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={translations.email}
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={translations.password}
          required
        />
        <button type="submit">{translations.login}</button>
      </form>
      <button className="auth-button">{translations.authWithEmail}</button>
      <button className="auth-button fb-button"><FaFacebook /> {translations.authWithFacebook}</button>
    </div>
  );
}

export default Login;
