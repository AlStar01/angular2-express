let mysql = require('mysql');
let db = require('../../config/db');
let dbUtils = require('../../config/dbUtils');

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
    return dbUtils.getAll('GetTags');
}

/**
 * Get tag by id
 * @param {number} id - id of tag
 * @return {Promise}
 */
function getTag(id) {
    return dbUtils.getById('GetTagById', id);
}

/**
 * Add new tag
 * @param {object} tag - tag
 * @returns {number} inserted tag_id
 */
function addTag(tag) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) return reject(err);

            connection.query('SET @tagId = 0; CALL AddTag(?, @tagId); SELECT @tagId as tagId;', [tag.name], (err, result) => {
                if(err) return reject(err);

                connection.release();
                return resolve(result[2][0]);
            });
        });
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

function getTagsByProduct(productId) {
    return db.dbUtils.getById('GetTagsByProductId', productId);
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