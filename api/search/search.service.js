let db = require('../../db/config');

class SearchService {
    constructor() {
        this.db = db;

        this.search = this.search.bind(this);
    }

    search(query) {
        return this.db
            .select()
            .from('product')
            .where('name', 'like', `%${query}%`)
            .orWhere('description', 'like', `%${query}%`);
    }
}

module.exports = new SearchService();