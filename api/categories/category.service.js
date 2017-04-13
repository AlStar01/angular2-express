let db = require('../../db/config');

class CategoryService {
    constructor() {
        this.db = db;

        this.getCategories = this.getCategories.bind(this);
    }

    getCategories() {        
        return db
            .select()
            .from('category')
            .orderBy('name');
    }

    getCategory(id) {
        return db
            .select()
            .from('category')
            .where('id', id)
            .first()
    }

    addCategory(category) {
        return db('category')
            .returning('id')
            .insert(category);
    }
}

module.exports = new CategoryService();