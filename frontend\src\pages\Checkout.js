import React from 'react';
import axios from 'axios';

const Checkout = () => {
  const [order, setOrder] = useState({});

  useEffect(() => {
    axios.post('/api/orders', {
      products: Object.keys(cart).map(productId => ({
        _id: productId,
        quantity: cart[productId].quantity
      }))
    })
      .then(response => {
        setOrder(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Checkout</h1>
      <p>Order ID: {order._id}</p>
      <p>Total: {order.total}</p>
    </div>
  );
};

export default Checkout;