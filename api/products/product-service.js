let mysql = require('mysql');
let db = require('../../config/db');

let service = {
    getProducts,
    getProduct,
    getProductByCategory,
    addProduct
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

function addProduct(product, quantity = 1) {
    const data = _getData(product, quantity);
    
    const raw = "INSERT INTO product (??, ??, ??, ??, ??) VALUES ?"
    const inserts = [
        'name', 
        'description',
        'model',
        'price',
        'category_id',
        data
    ];
    const sql = mysql.format(sql, inserts);
    
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            connection.query(sql, (err, result) => {
                if(err) reject(err);

                connection.release();
                resolve(result);
            });
        });
    });
}

function _getData(product, quantity) {
    let data = [];

    for(let i = 0; i < quantity; i++) {
        let values = [];
        
        for(let property in product) {
            values.push(product[property]);
        }

        data.push(values)
    }

    return data;
}

module.exports = service;