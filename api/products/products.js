var express = require('express');
var router = express.Router();

let db = require('../../config/db');

router.get('/', (req, res) => {
    db.getConnection((err, connection) => {
        connection.query('SELECT * from product', (err, rows) => {
            console.log(rows);
            connection.release();
            res.send(rows);
        });
    });
});

module.exports = router;