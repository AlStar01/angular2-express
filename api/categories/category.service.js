let db = require('../../db/config');

class CategoryService {
    constructor() {
        this.db = db;

        this.getCategories = this.getCategories.bind(this);
        this.getCategory = this.getCategory.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
    }

    getCategories() {        
        return this.db
            .select()
            .from('category')
            .orderBy('name');
    }

    getCategory(categoryId) {
        return Promise.all([
            this.db.select().from('category').where('id', categoryId).first(),
            this.db.select().from('product').where('category_id', categoryId).limit(25)
        ]);
    }

    addCategory(category) {
        return this.db('category')
            .returning('id')
            .insert(category)
            .then((categoryId) => this.db.select().from('category').where('id', categoryId).first());
    }

    updateCategory(category) {
        const updatedCategory = Object.assign({}, category, { id: undefined })
        
        return this.db('category')
            .where('id', category.id)
            .update(updatedCategory)
            .then(() => this.getCategory(category.id));
    }
}

module.exports = new CategoryService();