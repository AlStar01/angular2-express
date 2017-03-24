var express = require('express');
var router = express.Router();

let db = require('../../db/config');

router.get('/', (req, res) => {
    db.select().from('product')
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err));
});

router.get('/:id', (req, res) => {
    db.select().from('product').where('id', req.params.id)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err));
});

module.exports = router;