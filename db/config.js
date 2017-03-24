let path = require('path');

let dbPath = path.resolve(__dirname, 'products.sqlite');

let db = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath
    },
    useNullAsDefault: true
});

module.exports = db;