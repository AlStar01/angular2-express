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
            .select(['product.*', 'category.name as category_name', total])
            .from('product')
            .innerJoin('category', 'product.category_id', 'category.id')
            .offset(offset)
            .limit(limit);
    }

    getProduct(productId) {
        return this.db
            .select(['product.*', 'category.name as category_name'])
            .from('product')
            .innerJoin('category', 'product.category_id', 'category.id')
            .where('product.id', productId)
            .first();
    }


    getOffset(page, limit) {
        return (page - 1) * limit;
    }
}

module.exports = new ProductService();