const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

// This is not the way we can use for data sharing because it saves the data on the server across the browsers
const adminData = require('./admin');

const router = express.Router();

// get makes sure that it's a get method & that it's exactly this path ('/')
router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {prods: products, pageTitle: 'Online Shop', path: '/'});
});

module.exports = router;
