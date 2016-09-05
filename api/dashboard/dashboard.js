let express = require("express");
let router = express.Router();

let dashboardService = require('./dashboard-service');

router.get('/', (req, res) => {
    dashboardService.getProductsByCategory()
        .then(groups => res.send(groups))
        .catch(err => res.status(500).send(err));
});

module.exports = router;