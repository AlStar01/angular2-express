let db = require('../../db/config');

class ProductService {
    constructor() {
        this.db = db;

        this.getProducts = this.getProducts.bind(this);
        this.getProduct = this.getProduct.bind(this);
    }

    getProducts(page, limit) {
        let offset = this.getOffset();
        
        return this.db
            .select()
            .from('product')
            .limit(limit)
            .offset(offset)
    }

    getProduct(id) {
        return this.db.select().from('product').where('id', id);
    }

    getOffset(page, limit) {
        return page * limit;
    }
}

module.exports = new ProductService();