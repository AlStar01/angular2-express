let db = require('../../config/db');

let service = {
    getProducts,
    getProduct,
    getProductByCategory
};

function getProducts() {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            connection.query('SELECT * FROM product', (err, rows) => {
                if(err) reject(err);

                connection.release();
                resolve(rows);
            });
        });
    });
}

function getProduct(id) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            connection.query('SELECT * FROM product where product_id = ?', [id], (err, rows) => {
                if(err) reject(err);

                connection.release();
                resolve(rows);
            });
        });
    });
}

function getProductByCategory(categoryId) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            connection.query('SELECT * FROM product WHERE category_id = ?', [categoryId], (err, rows) => {
                if(err) reject(err);

                connection.release();
                resolve(rows);
            });
        });
    });
}

module.exports = service;