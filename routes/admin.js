const path = require('path');

// This route will handle the creation of the products which admin can do
const express = require('express');

const rootDir = require('../util/path');

// router is like a mini Express app pluggable into the other express app
const router = express.Router();

// Variable to store the data from the form
const products = [];

// This route is reach under /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product' });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  // By default req does not try to parse the incoming req body
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
