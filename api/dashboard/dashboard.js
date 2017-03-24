let express = require("express");
let router = express.Router();

let dashboardService = require('./dashboard-service');

router.get('/', (req, res) => {
    dashboardService.getProductsByCategory()
        .then(results => res.status(200).send(results));
});

module.exports = router;