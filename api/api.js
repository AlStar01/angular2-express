let express = require('express');
let app = express();

let products = require('./products/products');
let categories = require('./categories/categories');

app.use('/api/products', products);
app.use('/api/categories', categories);

module.exports = app;