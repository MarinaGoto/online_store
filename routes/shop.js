const express = require('express');

const router = express.Router();

// get makes sure that it's a get method & that it's exactly this path ('/')
router.get('/', (req, res, next) => {
  res.send('<h1>Hello from Express.js</h1>');
});

module.exports = router;
