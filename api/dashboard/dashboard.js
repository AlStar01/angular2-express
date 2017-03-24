let express = require("express");
let router = express.Router();

let dashboardService = require('./dashboard-service');

router.get('/', (req, res) => {
    const promises = [
        dashboardService.getProductsByCategory(),
        dashboardService.getProductsByColor()
    ];

    Promise.all(promises)
        .then(results => {
            let [productsByCategory, productsByColor] = results;
            
            res.status(200).send({productsByCategory, productsByColor});
        });
});

module.exports = router;