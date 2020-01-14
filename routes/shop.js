const path = require('path');

const express = require('express');

const router = express.Router();

// get makes sure that it's a get method & that it's exactly this path ('/')
router.get('/', (req, res, next) => {
  // Here dirname is pointing to routes but when we add '../' it gets to views
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;
