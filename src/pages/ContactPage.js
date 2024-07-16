import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <Navbar />
      <ContactForm />
    </div>
  );
}

export default ContactPage;