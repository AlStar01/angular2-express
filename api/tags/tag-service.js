let mysql = require('mysql');
let db = require('../../config/db');

let service = {
    getTags
};



/////////////////////////////////////

/**
 * Get all unique tags
 * @return {Promise}
 */
function getTags() {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) reject(err);

            connection.query('SELECT ??, ?? FROM tag', ['tag_id', 'name'], (err, rows) => {
                if(err) reject(err);

                connection.release();
                resolve(rows);
            });
        })
    });
}

/////////////////////////////////////

module.exports = service;