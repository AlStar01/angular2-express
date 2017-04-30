let express = require('express');
let router = express.Router();

let io = require('../socket');

let uuidV4 = require('uuid/v4');

let categoryService = require('./category.service');

router.get('/', (req, res) => {
    categoryService.getCategories()
        .then(categories => res.status(200).send(categories))
        .catch(err => res.status(500).send('Error retrieving categories'));
});

router.get('/:id', (req, res) => {
    categoryService.getCategory(req.params.id)
        .then(values => {
            const [category, products] = values;
            return res.status(200).send({ category, products })
        })
        .catch(err => res.status(500).send('Error retrieving category by id'))
});

router.post('/', (req, res) => {
    categoryService.addCategory(req.body)
        .then(category => {
            const notification = { id: uuidV4(), text: 'New category added', url: ['/categories', category.id] };

            io.emit('CATEGORY_ADDED', notification);

            return res.status(200).send(category);
        })
        .catch(err => res.status(500).send('Failed to add new product'));
});

router.put('/:id', (req, res) => {
    categoryService.updateCategory(req.body)
        .then(category => res.status(200).send(category))
        .catch(err => res.status(500).send('Failed to update category'));
});

module.exports = router;