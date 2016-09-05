let db = require('../../config/db');

let service = {
    getCategories,
    getCategory,
    addCategory
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
            if(err) reject(err);

            connection.query('SELECT * FROM category where category_id = ?', [id], (err, rows) => {
                if(err) reject(err);

                connection.release();
                resolve(rows);
            });
        });
    });
}

function addCategory(category) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) reject(err);

            connection.query('INSERT INTO category SET ?', category, (err, result) => {
                if(err) reject(err);

                connection.release();
                resolve(result);
            });
        });
    });
}

module.exports = service;