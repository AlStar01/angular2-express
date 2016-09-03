var express = require('express');
var router = express.Router();

let productService = require('./product-service');

let db = require('../../config/db');

router.get('/', (req, res) => {
    productService.getProducts()
        .then(products => res.send(products))
        .catch((err) => res.status(500).send(err));
});

router.get('/:id', (req, res) => {
    productService.getProduct(req.params.id)
        .then(products => res.send(products))
        .catch((err) => res.status(500).send(err));
});

module.exports = router;