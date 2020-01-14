const path = require('path');

// This route will handle the creation of the products which admin can do
const express = require('express');

// router is like a mini Express app pluggable into the other express app
const router = express.Router();

// This route is reach under /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  // By default req does not try to parse the incoming req body
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
