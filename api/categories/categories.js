let express = require('express');
let router = express.Router();

let db = require('../../config/db');

let categoryService = require('./category-service');

router.get('/', (req, res) => {
    categoryService.getCategories()
        .then(categories => res.send(categories))
        .catch(err => res.status(500).send("Error retrieving categories"));
});

router.get('/:id', (req, res) => {
    categoryService.getCategory(req.params.id)
        .then(categories => res.send(categories))
        .catch(err => res.status(500).send(err));
});

router.get('/:id/products', (req, res) => {
    categoryService.getProductsByCategory(req.params.id)
        .then(categories => res.send(categories))
        .catch(err => res.status(500).send(err));
});

router.post('/', (req, res) => {
    categoryService.addCategory(req.body)
        .then(id => res.send({id}))
        .catch(err => res.status(500).send(err));
});

module.exports = router;