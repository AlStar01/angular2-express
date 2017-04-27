let db = require('../../db/config');

class CategoryService {
    constructor() {
        this.db = db;

        this.getCategories = this.getCategories.bind(this);
    }

    getCategories() {        
        return this.db
            .select()
            .from('category')
            .orderBy('name');
    }

    getCategory(id) {
        return this.db
            .select()
            .from('category')
            .where('id', id)
            .first()
    }

    addCategory(category) {
        return this.db('category')
            .returning('id')
            .insert(category)
            .then((categoryId) => this.getCategory(categoryId[0]));
    }
}

module.exports = new CategoryService();