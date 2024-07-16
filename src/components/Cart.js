import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Cart.css';

function Cart({ cartItems = [], updateItemQuantity, removeFromCart }) {
  const { translations } = useLanguage();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>{translations.cart}</h2>
      {cartItems.length === 0 ? (
        <p>{translations.emptyCart}</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <div>
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                <button onClick={() => removeFromCart(item.id)}>{translations.remove}</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>{translations.total}: ${totalPrice.toFixed(2)}</h3>
      <button>{translations.checkout}</button>
    </div>
  );
}

export default Cart;
