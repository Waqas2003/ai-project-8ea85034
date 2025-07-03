const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');

router.post('/', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.send({ message: 'Order created successfully' });
});

router.get('/', async (req, res) => {
  const orders = await Order.find().populate('products');
  res.send(orders);
});

module.exports = router;
```

**Frontend (React.js)**