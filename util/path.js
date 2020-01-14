// function that helps to construct path to the parent directory
const path = require('path');

// mainModule = app.js
module.exports = path.dirname(process.mainModule.filename);
