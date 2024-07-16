import React from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import { useCart } from '../contexts/CartContext';
import './CartPage.css';

function CartPage() {
  const { cartItems, updateItemQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <Navbar />
      <Cart
        cartItems={cartItems}
        updateItemQuantity={updateItemQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default CartPage;
