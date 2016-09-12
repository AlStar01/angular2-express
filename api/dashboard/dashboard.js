let express = require("express");
let router = express.Router();

let dashboardService = require('./dashboard-service');

router.get('/', (req, res) => {
    const promises = [
        dashboardService.getProductsByModel(),
        dashboardService.getProductsByCategory(),
        dashboardService.getProductsRecentActivity()
    ];
    
    Promise.all(promises)
        .then((data) => {
            const response = {
                productsByModel: data[0],
                productsByCategory: data[1],
                recentActivities: data[2]
            }

            res.send(response);
        }).catch(err => res.status(500).send(err));
});

module.exports = router;