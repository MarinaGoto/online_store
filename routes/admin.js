// This route will handle the creation of the products which admin can do
const express = require('express');

// router is like a mini Express app pluggable into the other express app
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(
      '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
      );
});

// Limiting Middleware execution to POST requests
router.post('/product', (req, res, next) => {
  // By default req does not try to parse the incoming req body
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
