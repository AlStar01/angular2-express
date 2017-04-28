let express = require("express");
let router = express.Router();

let dashboardService = require('./dashboard-service');

router.get('/', (req, res) => {
    dashboardService.getDashboardData()
        .then(values => {
            const [productsByColor, productsByCategory] = values;
            return res.status(200).send({ productsByColor, productsByCategory });
        })
        .catch(err => res.status(500).send(err));
});

module.exports = router;