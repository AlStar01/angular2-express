let express = require('express');
let router = express.Router();

let searchService = require('./search.service');

router.get('/', (req, res) => {
    return searchService.search(req.query.search)
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err));
});

module.exports = router;