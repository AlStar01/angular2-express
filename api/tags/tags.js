let express = require('express');
let router = express.Router();

let tagService = require('./tag-service');

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

router.post('/', (req, res) => {
    tagService.addTag(req.body)
        .then(id => res.send({id}))
        .catch(err => res.status(500).send(err));
});

module.exports = router;