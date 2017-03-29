let db = require('../../db/config');

class ProductService {
    constructor() {
        this.db = db;

        this.getProducts = this.getProducts.bind(this);
        this.getProduct = this.getProduct.bind(this);
    }

    getProducts(page = 1, limit = 25, query) {
        let offset = this.getOffset(page, limit);

        let total = db.raw('select count(*) from ??', ['product']).wrap('(', ') total');

        return this.db
            .select(['*', total])
            .from('product')
            .limit(parseInt(limit))
            .offset(offset);
    }

    getProduct(id) {
        return this.db.select().from('product').where('id', id);
    }


    getOffset(page, limit) {
        return page * limit;
    }
}

module.exports = new ProductService();