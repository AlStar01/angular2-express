let db = require('../../db/config');

class ProductService {
    constructor() {
        this.db = db;

        this.getProducts = this.getProducts.bind(this);
        this.getProduct = this.getProduct.bind(this);
    }

    getProducts(page, limit) {
        let offset = this.getOffset(page, limit);
        
        return this.db
            .select()
            .from('product')
            .limit(parseInt(limit))
            .offset(offset)
    }

    getProduct(id) {
        return this.db.select().from('product').where('id', id).first();
    }

    getOffset(page, limit) {
        return page * limit;
    }
}

module.exports = new ProductService();