let mysql = require('mysql');

let db = require('./db');

let dbUtils = {
    getAll,
    getById,
    updateById
};

function getAll(procedure) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) reject(err);
            
            connection.query(`CALL ${procedure}()`, (err, rows) => {
                if(err) reject(err);

                connection.release();
                resolve(rows[0]); 
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
                resolve(rows[0]); 
            });
        });
    });
}

function addItem(procedure, values, params, selects) {
    const placeholders = getEscapePlaceholders(values);
    const paramNames = getParamNames(params);
    const sets = getParams(params);
    const returns = getReturns(selects);
    
    return new Promise((resolve, reject) => {
        getDbConnection
            .then((connection) => {
                connection.query(`${sets}; CALL ${procedure}(${escaped}, ${paramNames}); SELECT ${returns}`, [...values], (err, rows) => {
                    if(err) reject(err);

                    connection.release();
                    resolve(rows);
                });
            })
            .catch(error => reject(error));
    });
}

function updateById(procedure, ...values) {
    const placeholders = getEscapePlaceholders(values);
    
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            connection.query(`CALL ${procedure}(${placeholders});`, values, (err, rows) => {
                if(err) reject(err);

                connection.release();
                resolve(rows);
            });
        });
    });
}

//////////////////////////////////////


function getDbConnection() {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) reject(err);

            resolve(connection);
        });
    });
}

function getParams(params) {
    return Object.keys(params)
                 .map(key => {
                     return `SET ${key} = ${params[key]}`;
                  })
                  .join('; ');
}

function getEscapePlaceholders(values) {
    return values.map(value => '?').join(', ');
}

function getParamNames(params) {
    return Object.keys(params).map(key => key).join(', ');
}

function getReturns(selects) {
    return selects.join(', ');
}

module.exports = dbUtils;