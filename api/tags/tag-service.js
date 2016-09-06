let mysql = require('mysql');
let db = require('../../config/db');

let service = {
    getTags,
    getTag,
    addTag,
    getTagsByProduct
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
 * Get tag by id
 * @param {number} id - id of tag
 * @return {Promise}
 */
function getTag(id) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) reject(err);

            connection.query('SELECT ??, ?? FROM tag WHERE ?? = ?', ['tag_id', 'name', 'tag_id', id], (err, rows) => {
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

function getTagsByProduct(id) {
    const raw = "SELECT ??, ?? FROM tag t JOIN product_tag pt ON ?? = ?? WHERE ?? = ?"

    const inserts = [
        't.tag_id',
        't.name',
        'pt.tag_id',
        't.tag_id',
        'pt.product_id',
        id
    ];

    const sql = mysql.format(raw, inserts);
    
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) return reject(err);

            connection.query(sql, (err, rows) => {
                if(err) return reject(err);

                connection.release();
                return resolve(rows);
            });
        })
    });
}

/////////////////////////////////////

module.exports = service;