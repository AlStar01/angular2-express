let db = require('../../db/config');

class DashboardService {
    constructor() {
        this.db = db;

        this.getProductsByCategory = this.getProductsByCategory.bind(this);
        this.getProductsByColor = this.getProductsByColor.bind(this);
    }

    getProductsByCategory() {
        return db
            .select(['category.id as categoryId', 'category.name'])
            .count('product.id as total')
            .from('product')
            .innerJoin('category', 'product.category_id', 'category.id')
            .groupBy('product.category_id')
            .orderBy('total', 'desc')
            .orderBy('category.name')
            .limit(limit);
    }

    getProductsByColor() {
        return db.
            select('product.color')
            .count('product.id as total')
            .from('product')
            .groupBy('product.color')
            .orderBy('total', 'desc')
            .orderBy('color')
            .limit(limit);
    }
}

// /**
//  * Product counts by model
//  * @returns {Promise}
//  */
// function getProductsByModel() {
//     const raw = 'SELECT ??, ??, COUNT(??) as total FROM product p GROUP BY ?? ORDER BY total DESC LIMIT 5';

//     const inserts = [
//         'p.model',
//         'p.name',
//         'p.product_id',
//         'p.model'
//     ];

//     const sql = mysql.format(raw, inserts);

//     return new Promise((resolve, reject) => {
//         db.getConnection((err, connection) => {
//             if(err) reject(err);

//             connection.query(sql, (err, rows) => {
//                 if (err) reject(err);

//                 connection.release();
//                 resolve(rows);
//             });
//         });
//     });
// }

// /**
//  * Product counts by price
//  * @returns {Promise}
//  */
// function getProductsByPrice() { }

// /**
//  * Recent product table activity in descending order limited to 10
//  * @returns {Promise}
//  */
// function getProductsRecentActivity() {
//     const raw = 'SELECT ??, ??, ??, ?? as category, ?? as timestamp FROM product p JOIN category c ON ?? = ?? ORDER BY ?? DESC LIMIT 10';

//     const inserts = [
//         'p.name',
//         'p.model',
//         'p.price',
//         'c.name',
//         'p.modified_on',
//         'c.category_id',
//         'p.category_id',
//         'p.modified_on'
//     ];

//     const sql = mysql.format(raw, inserts);
    
//     return new Promise((resolve, reject) => {
//         db.getConnection((err, connection) => {
//             if(err) reject(err);

//             connection.query(sql, (err, rows) => {
//                 if (err) reject(err);

//                 connection.release();
//                 resolve(rows);
//             });
//         });
//     });
// }

module.exports = new DashboardService();