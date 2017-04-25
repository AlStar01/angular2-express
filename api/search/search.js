let express = require('express');
let router = express.Router();

let searchService = require('./search.service');

router.post('/', (req, res) => {
    return searchService.search(req.body.query)
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err));
});

module.exports = router;