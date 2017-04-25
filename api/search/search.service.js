let db = require('../../db/config');

class SearchService {
    constructor() {
        this.db = db;

        this.search = this.search.bind(this);
    }

    search(term) {
        return this.db
            .select(['id', 'name'])
            .from('product')
            .where('name', 'like', `%${term}%`)
            .orWhere('description', 'like', `%${term}%`)
            .orderBy('name')
            .limit(10);
    }
}

module.exports = new SearchService();