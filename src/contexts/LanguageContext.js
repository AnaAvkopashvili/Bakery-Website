import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const translations = {
  en: {
    home: 'Home',
    profile: 'Profile',
    contact: 'Contact',
    cart: 'Cart',
    checkout: 'Checkout',
    total: 'Total',
    remove: 'Remove',
    login: 'Log In',
    signup: 'Sign Up',
    filter: 'Filter products...',
    sortBy: 'Sort by',
    priceAsc: 'Price (Ascending)',
    priceDesc: 'Price (Descending)',
    emptyCart: 'Your cart is empty.',
    send: 'Send',
    search: 'Search...',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    password: 'Password',
    address: 'Address',
    sale: 'Sale',
    addToCart: 'Add to Cart',
    viewDetails: 'View Details',
    firstName: 'First Name',
    lastName: 'Last Name',
    confirmPassword: 'Confirm Password',
    nameAsc: 'Name (a-z)',
    nameDesc: 'Name (z-a)',
    unavailable: 'Unavailable',
    more: 'More',
    gallery: 'Gallery',
    authWithEmail: 'Login with Email',
    authWithFacebook: 'Login with Facebook',
    allPrices: 'All Prices',
    allAvailability: 'All Availability',
    onSale: 'On Sale',
    notOnSale: 'Not On Sale',
    sale: 'Sale',
    outOfStock: 'Out of stock',
    more: 'More',
    gallery: 'Gallery',
    allTypes: 'All Types',
    camera: 'Camera',
    film: 'Film',
    contactUs:'Contact Us',
    phoneNumber: 'Phone Number',
    contactUsInfo1:'Visit our second website (This one is much better)',
    contactUsInfo2:'Or leave a message and we will contact you!',
    footerTextContactUs:'By entering email you subscribe our newsletter',
  },
  ge: {
    home: 'სახლი',
    profile: 'პროფილი',
    contact: 'კონტაქტი',
    cart: 'კალათა',
    checkout: 'გადახდა',
    total: 'ჯამში',
    remove: 'წაშლა',
    login: 'შესვლა',
    signup: 'რეგისტრაცია',
    filter: 'ფილტრი',
    sortBy: 'დასორტვა',
    priceAsc: 'ფასი (ზრდადობით)',
    priceDesc: 'ფასი (კლებადობით)',
    emptyCart: 'კალათა ცარიელია',
    send: 'გაგზავნა',
    search: 'ძებნა...',
    name: 'სახელი',
    email: 'მეილი',
    message: 'მესიჯი',
    password: 'პაროლი',
    address: 'მისამართი',
    addToCart: 'კალათაში დამატება',
    viewDetails: 'სრულად',
    firstName: 'სახელი',
    lastName: 'გვარი',
    confirmPassword: 'დაადასტურეთ პაროლი',
    nameAsc: 'სახელით ა-ჰ',
    nameDesc: 'სახელით ჰ-ა',
    allPrices: 'ყველა ფასი',
    allAvailability: 'ყველა',
    onSale: 'იყიდება',
    notOnSale: 'არ არის გაყიდვაში',
    sale: 'იყიდება',
    more: 'მეტი',
    gallery: 'გალერეა',
    unavailable: 'არ არის მარაგში',
    authWithEmail: 'შედი მეილით',
    authWithFacebook: 'შედი Facebook - ით',
    allTypes: 'ყველა ტიპის',
    contactUs:'დაგვიკავშრიდი',
    phoneNumber: 'ტელეფონის ნომერი',
    contactUsInfo1:'ეწვიეთ ჩვენს ახალ ვებსაიტს ბმულზე: ',
    contactUsInfo2:'ან დაგვიტოვეთ შეტყობინება და ჩვენ დაგიკავშირდებით ',
    footerTextContactUs:'მეილის შეყვანით თქვენ ადასტურებთ სიახლეების მიღებას'
  },

};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
