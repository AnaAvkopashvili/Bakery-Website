import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { translations } = useLanguage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
        <h1>{translations.contactUs}</h1>
      
      <p>{translations.email}: bakery@gmail.com</p>
      <p>{translations.phoneNumber}: +995-555-08-09-10</p>
      <p> {translations.contactUsInfo1} <a href="https://madart.ge/">Website</a><br /><br /></p>
      <p>{translations.contactUsInfo2}</p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={translations.name}
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={translations.email}
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder={translations.message}
        required
      />
      <button type="submit">{translations.send}</button>
        <br />
      <p>{translations.footerTextContactUs}</p>
    </form>
  );
}

export default ContactForm;
