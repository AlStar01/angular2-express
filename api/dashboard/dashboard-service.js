let mysql = require('mysql');

let db = require('../../config/db');

let service = {
    getProductsByCategory,
    getProductsByModel,
    getProductsByPrice,
    getProductsRecentActivity
};

/**
 * Product counts grouped by categories
 * @returns {Promise}
 */
function getProductsByCategory() {
    const raw = `SELECT ??, ??, COUNT(??) as total
        FROM product p 
        JOIN category c on ?? = ?? 
        GROUP BY ?? 
        ORDER BY total DESC`;

    const inserts = [
        'p.category_id',
        'c.name',
        'p.product_id',
        'c.category_id',
        'p.category_id',
        'c.name'
    ];

    const sql = mysql.format(raw, inserts);

    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) reject(err);

            connection.query(sql, (err, rows) => {
                if (err) reject(err);

                connection.release();
                resolve(rows);
            });
        });
    });
}

/**
 * Product counts by model
 * @returns {Promise}
 */
function getProductsByModel() {
    const raw = 'SELECT ??, ??, COUNT(??) as total FROM product p GROUP BY ?? ORDER BY total DESC LIMIT 5';

    const inserts = [
        'p.model',
        'p.name',
        'p.product_id',
        'p.model'
    ];

    const sql = mysql.format(raw, inserts);

    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) reject(err);

            connection.query(sql, (err, rows) => {
                if (err) reject(err);

                connection.release();
                resolve(rows);
            });
        });
    });
}

/**
 * Product counts by price
 * @returns {Promise}
 */
function getProductsByPrice() { }

/**
 * Recent product table activity in descending order limited to 10
 * @returns {Promise}
 */
function getProductsRecentActivity() {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) reject(err);

            connection.query('SELECT * FROM product ORDER BY ?? DESC LIMIT 10', ['product.modified_on'], (err, rows) => {
                if (err) reject(err);

                connection.release();
                resolve(rows);
            });
        });
    });
}

module.exports = service;