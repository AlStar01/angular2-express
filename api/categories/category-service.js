let mysql = require('mysql');

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
    let products, category;
    
    const raw = 'SELECT ??, ??, ??, ??, ??, ?? as category, ?? as categoryDescription FROM product p JOIN category c ON ?? = ?? WHERE ?? = ?';

    const inserts = [
        'p.product_id',
        'p.name',
        'p.model',
        'p.price',
        'c.category_id',
        'c.name',
        'c.description',
        'c.category_id',
        'p.category_id',
        'p.category_id',
        categoryId
    ];

    const sql = mysql.format(raw, inserts);
    
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) return reject(err);

            connection.query(sql, (err, rows) => {
                if(err) return reject(err);

                connection.release();
                return resolve({
                    products: rows,
                    category: _getCategory(rows[0])
                });
            });
        });
    });
}

function _getCategory(product) {
    if(product) {
        return {
            category_id: product.category_id,
            name: product.category,
            description: product.categoryDescription
        }
    }
}

module.exports = service;