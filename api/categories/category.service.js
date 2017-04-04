let db = require('../../db/config');

class CategoryService {
    constructor() {
        this.db = db;

        this.getCategories = this.getCategories.bind(this);
    }

    getCategories() {
        let total = db.raw('select count(*) from ??', ['category']).wrap('(', ') total');
        
        return db
            .select(['*', total])
            .from('category')
            .orderBy('name');
    }
}

module.exports = new CategoryService();