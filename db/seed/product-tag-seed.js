let faker = require('faker');

let db = require('../config');

let products = [];
let tags = [];

Promise.all([
    db.pluck('id').from('Product').orderBy('id'),
    db.pluck('id').from('Tag').orderBy('id')
]).then(function (values) {
    products = values[0];
    tags = values[1];

    return products.forEach((product) => {
        let product_tags = [];

        let quantity = faker.random.number({ min: 1, max: 5 });

        for(let i = 0; i < quantity; i++) {
            tag = faker.random.arrayElement(tags);

            product_tags.push({ product_id: product, tag_id: tag });
        }

        product_tags = [...new Set(product_tags)];

        db.insert(product_tags).into('Product_Tag').then(function (id) {
            console.log(id);
        });
    });
});