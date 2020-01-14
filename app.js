const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Here we tell express that we want to compiler dynamic templates with the pug engine and where to find these templates ('views')
app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// This registers the middleware and calls next() at the end
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Here the order is matter
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
