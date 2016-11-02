let mysql = require('mysql');

let db = require('./db');

let dbUtils = {
    getAll,
    getById
};

function getAll(procedure) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) reject(err);
            
            connection.query(`CALL ${procedure}()`, (err, rows) => {
                if(err) reject(err);

                connection.release();
                resolve(rows); 
            });
        });
    });
}

function getById(procedure, id) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) reject(err);
            
            connection.query(`CALL ${procedure}(?)`, [id], (err, rows) => {
                if(err) reject(err);
                if(rows.length === 0) reject(`No categories with id ${id}`);

                connection.release();
                resolve(rows); 
            });
        });
    });
}

module.exports = dbUtils;