let express = require('express');
let router = express.Router();

let db = require('../../config/db');

router.get('/', (req, res) => {
    db.getConnection((err, connection) => {
        connection.query('SELECT * FROM category', (err, rows) => {
            if(err) res.status(500).send("Error retrieving categories");

            connection.release();
            res.send(rows);
        });
    });
});

module.exports = router;