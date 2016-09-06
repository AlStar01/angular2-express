let mysql = require('mysql');
let db = require('../../config/db');

let service = {
    getTags,
    addTag
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

/**
 * Add new tag
 * @param {tag}
 * @returns {number} inserted tag_id
 */
function addTag(tag) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) return reject(err);

            connection.query('INSERT INTO tag SET ?', [tag], (err, result) => {
                if(err) return reject(err);

                connection.release();
                return resolve(result.insertId);
            });
        })
    });
}

/////////////////////////////////////

module.exports = service;