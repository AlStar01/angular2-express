let express = require("express");
let router = express.Router();

let dashboardService = require('./dashboard-service');

router.get('/', (req, res) => {
    Promise.all([
        dashboardService.getProductsByModel(),
        dashboardService.getProductsByCategory(),
        dashboardService.getProductsRecentActivity()
    ]).then((data) => {
        const response = {
            productsByModel: [],
            productsByCategory: data[1],
            recentActivity: data[2]
        }

        res.send(response);
    }).catch(err => res.status(500).send(err));
});

module.exports = router;