let mysql = require('mysql');

let db = require('../../config/db');

let dbUtils = require('../../config/dbUtils');

let service = {
    getCategories,
    getCategory,
    addCategory,
    getProductsByCategoryId,
    updateCategory
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

function getProductsByCategoryId(categoryId) {
    return dbUtils.getById('GetProductsByCategoryId', categoryId);
}

function updateCategory(category) {
    return dbUtils.updateById('UpdateCategory', category.categoryId, category.name, category.description);
}

module.exports = service;