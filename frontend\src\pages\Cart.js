import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios.get('/api/cart')
      .then(response => {
        setCart(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {Object.keys(cart).map(productId => (
          <li key={productId}>
            <span>{cart[productId].title}</span>
            <span>x {cart[productId].quantity}</span>
          </li>
        ))}
      </ul>
      <p>Total: {Object.values(cart).reduce((acc, product) => acc + product.price * product.quantity, 0)}</p>
    </div>
  );
};

export default Cart;