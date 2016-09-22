let mysql = require('mysql');
let db = require('../../config/db');

let service = {
    getProducts,
    getProduct,
    getProductsByCategory,
    getProductsByTag,
    addProduct
};

function getProducts() {
    const raw = 'SELECT DISTINCT ??, ??, ??, ??, ??, ?? as category, ?? FROM product p JOIN category c ON ?? = ??';

    const inserts = [
        'p.product_id',
        'p.name',
        'p.description',
        'p.model',
        'p.price',
        'c.name',
        'p.img_url',
        'c.category_id',
        'p.category_id'
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
        });
    });
}

function getProduct(id) {
    const raw = 'SELECT DISTINCT ??, ??, ??, ??, ??, ?? as category, ??, ??, ?? FROM product p JOIN category c ON ?? = ?? WHERE product_id = ?';

    const inserts = [
        'p.product_id',
        'p.name',
        'p.description',
        'p.model',
        'p.price',
        'c.name',
        'p.img_url',
        'p.created_on',
        'p.modified_on',
        'c.category_id',
        'p.category_id',
        id
    ];

    const sql = mysql.format(raw, inserts);
    
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) return reject(err);

            connection.query(sql, (err, rows) => {
                if(err) return reject(err);
                if(rows.length === 0) return reject("No results")

                connection.release();

                return resolve(rows[0]);
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

function getProductsByTag(tagId) {
    const raw = 'SELECT ??, ??, ??, ??, ??, ?? FROM product p JOIN product_tag pt ON ?? = ?? JOIN tag t ON ?? = ?? WHERE ?? = ?';

    const inserts = [
        'p.product_id',
        'p.name',
        'p.description',
        'p.model',
        'p.price',
        'p.category_id',
        'p.product_id',
        'pt.product_id',
        't.tag_id',
        'pt.tag_id',
        't.tag_id',
        tagId
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
    const sql = mysql.format(raw, inserts);
    
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) return reject(err);

            connection.query(sql, (err, result) => {
                if(err) return reject(err);

                connection.release();
                return resolve(result);
            });
        });
    });
}

/**
 * Prepare product object data for insertion as nested array of values
 * @param {product} product - product object
 * @param {number} quantity - number of product instances to insert
 * @returns {Array<Array<any>>} - two-dimensional array containing arrays of product object values [[1, 2, 3], [1, 2, 3]]
 */
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