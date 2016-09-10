let mysql = require('mysql');
let db = require('../../config/db');

let service = {
    getTags,
    getTag,
    addTag,
    addTagsToProduct,
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

/**
 * Add one or more tags to a product
 * @param {number} productId - Id of product
 * @param {Array<tag>} tags - tags to inserted
 */
function addTagsToProduct(productId, tags) {
    const data = _getData(productId, tags);
    
    const raw = "INSERT INTO product_tag (??, ??) VALUES ?";

    const inserts = [
        'product_id',
        'tag_id',
        data
    ];

    const sql = mysql.format(raw, inserts);

    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) return reject(err);

            connection.query(sql, (err, result) => {
                if(err) return reject(err);

                connection.release();
                return resolve(result);
            });
        })
    });
}

function getTagsByProduct(id) {
    const raw = "SELECT ??, ?? FROM tag t JOIN product_tag pt ON ?? = ?? JOIN product p ON ?? = ?? WHERE ?? = ?"

    const inserts = [
        't.tag_id',
        't.name',
        'pt.tag_id',
        't.tag_id',
        'p.product_id',
        'pt.product_id',
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

/**
 * Create nested array of data to inserted
 * @param {number} productId - Id of product
 * @param {Array<tag>} tags
 * @returns {Array<Array<any>>} - two-dimensional array containing arrays of product id and tag id [[1, 2], [1, 3]]
 */
function _getData(productId, tags) {
    return tags.map(tag => [productId, tag.id]);
}

/**
 * Get id of tag by name
 * @param {string} name - name of tage
 * @return {Number} id - id of tag
 */
function _getTagId(name) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) return reject(err);

            connection.query('SELECT ?? FROM tag where name = ?', ['tag_id', name], (err, rows) => {
                if(err) return reject(err);

                connection.release();
                return resolve(rows);
            });
        })
    });
}

/////////////////////////////////////

module.exports = service;