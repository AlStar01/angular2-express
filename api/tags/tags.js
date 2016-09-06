let express = require('express');
let router = express.Router();

let tagService = require('./tag-service');

router.get('/', (req, res) => {
    tagService.getTags()
        .then(tags => res.send(tags))
        .catch(err => res.status(500).send(err));
});

module.exports = router;