const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Here we tell express that we want to compiler dynamic templates with the handlebars engine and where to find these templates ('views')
// Ejs is supported so we don't need to register engine

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// This registers the middleware and calls next() at the end
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Here the order is matter
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: ''
  })
});

app.listen(3000);
