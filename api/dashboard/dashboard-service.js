let db = require('../../config/db');

let service = {
    getProductsByCategory,
    getProductsByModel,
    getProductsByPrice
};

/**
 * Product counts grouped by categories
 * @returns {Promise}
 */
function getProductsByCategory() {
    return new Promise((resolve, reject) => {

    });
}

/**
 * Product counts by model number
 * @returns {Promise}
 */
function getProductsByModel() { }

/**
 * Product counts by price
 * @returns {Promise}
 */
function getProductsByPrice () { }

module.exports = service;