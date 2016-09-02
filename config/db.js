var mysql = require('mysql');
var db = mysql.createPool({
    user: 'root',
    password: 'secret',
    database: 'sample'
});

module.exports = db;