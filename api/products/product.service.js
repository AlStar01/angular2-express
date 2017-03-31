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
        let category = db.raw('select name from ?? where product.category_id', ['category'])

        return this.db
            .select(['product.*', 'category.name as category',total])
            .from('product')
            .innerJoin('category', 'product.category_id', 'category.id')
            .offset(offset)
            .limit(limit);
    }

    getProduct(id) {
        return this.db.select().from('product').where('id', id).first();
    }


    getOffset(page, limit) {
        return (page - 1) * limit;
    }
}

module.exports = new ProductService();