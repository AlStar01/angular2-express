let db = require('../../db/config');

class ProductService {
    constructor() {
        this.db = db;

        this.getProducts = this.getProducts.bind(this);
        this.getProduct = this.getProduct.bind(this);
    }

    getProducts(page, limit) {
        return this.db.select().from('product').limit(limit);
    }

    getProduct(id) {
        return this.db.select().from('product').where('id', id);
    }
}

module.exports = new ProductService();