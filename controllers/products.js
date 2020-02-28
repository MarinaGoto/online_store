// Variable to store the data from the form
const products = [];

// Only product related logic
exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  // By default req does not try to parse the incoming req body
  products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Online Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
    // by default it will render the default layout if we do not set layout: false
  });
}
