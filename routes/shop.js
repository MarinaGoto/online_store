const express = require('express');

const productsConroller = require('../controllers/products');

const router = express.Router();

// get makes sure that it's a get method & that it's exactly this path ('/')
router.get('/', productsConroller.getProducts);

module.exports = router;
