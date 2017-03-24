let express = require('express');
let router = express.Router();

let db = require('../../db/config');

let productService = require('./product.service');

router.get('/', (req, res) => {
    productService.getProducts()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err));
});

router.get('/:id', (req, res) => {
    productService.getProduct(req.params.id)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err));
});

module.exports = router;