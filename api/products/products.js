var express = require('express');
var router = express.Router();

let db = require('../../config/db');

router.get('/', (req, res) => {
    db.getConnection((err, connection) => {
        connection.query('SELECT * FROM product', (err, rows) => {
            if(err) res.status(500).send('Error retrieving products');

            connection.release();
            res.send(rows);
        });
    });
});

module.exports = router;