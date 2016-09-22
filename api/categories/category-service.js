let db = require('../../config/db');

let service = {
    getCategories,
    getCategory,
    addCategory,
    getProductsByCategory
};

function getCategories() {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            connection.query('SELECT * FROM category', (err, rows) => {
                if(err) reject(err);

                connection.release();
                resolve(rows);
            });
        });
    });
}

function getCategory(id) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) return reject(err);

            connection.query('SELECT * FROM category where category_id = ?', [id], (err, rows) => {
                if(err) return reject(err);
                if(rows.length === 0) return reject("No results");

                connection.release();
                return resolve(rows[0]);
            });
        });
    });
}

function addCategory(category) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) return reject(err);

            connection.query('INSERT INTO category SET ?', [category], (err, result) => {
                if(err) return reject(err);

                connection.release();
                return resolve(result.insertId);
            });
        });
    });
}

function getProductsByCategory(categoryId) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) return reject(err);

            connection.query('SELECT * FROM product WHERE category_id = ?', [categoryId], (err, rows) => {
                if(err) return reject(err);

                connection.release();
                return resolve(rows);
            });
        });
    });
}

module.exports = service;