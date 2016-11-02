let mysql = require('mysql');

let db = require('../../config/db');

let dbUtils = require('../../config/dbUtils');

let service = {
    getCategories,
    getCategory,
    addCategory,
    getProductsByCategory
};

function getCategories() {
    return dbUtils.getAll('GetAllCategories');
}

function getCategory(id) {
    return dbUtils.getById('GetCategoryById', id);
}

function addCategory(category) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) return reject(err);

            connection.query('SET @categoryId = 0; CALL AddCategory(?, ?, @categoryId); SELECT @categoryId;', [category.name, category.description], (err, result) => {
                if(err) return reject(err);

                connection.release();
                return resolve(result[2]);
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