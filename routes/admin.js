// This route will handle the creation of the products which admin can do
const express = require('express');

const productsController = require('../controllers/products');

// router is like a mini Express app pluggable into the other express app
const router = express.Router();

// This route is reach under /admin/add-product => GET
// pass reference to the getAddProduct function
router.get('/add-product',  productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
