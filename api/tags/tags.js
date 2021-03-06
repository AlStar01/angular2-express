let express = require('express');
let router = express.Router();

let tagService = require('./tag-service');
let productService = require('../products/product-service');

router.get('/', (req, res) => {
    tagService.getTags()
        .then(tags => res.send(tags))
        .catch(err => res.status(500).send(err));
});

router.get('/:id', (req, res) => {
    tagService.getTag(req.params.id)
        .then(tags => res.send(tags))
        .catch(err => res.status(500).send(err));
});

router.get('/:id/products', (req, res) => {
    productService.getProductsByTag(req.params.id)
        .then(products => res.send(products))
        .catch(err => res.status(500).send(err));
});

router.post('/', (req, res) => {
    tagService.addTag(req.body)
        .then(id => res.send({id}))
        .catch(err => res.status(500).send(err));
});

module.exports = router;