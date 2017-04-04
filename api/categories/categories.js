let express = require('express');
let router = express.Router();

let categoryService = require('./category.service');

router.get('/', (req, res) => {
    categoryService.getCategories()
        .then(categories => res.status(200).send(categories))
        .catch(err => res.status(500).send("Error retrieving categories"));
});

module.exports = router;