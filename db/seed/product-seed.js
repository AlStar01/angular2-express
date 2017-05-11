let faker = require('faker');

let db = require('../config');

let categories = [];

db.pluck('id').from('Category').orderBy('id').then(function (categoryIds) {
    for (let i = 0; i < 500; i++) {
        let product = {
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            price: faker.commerce.price(),
            color: faker.commerce.color(),
            material: faker.commerce.productMaterial(),
            origin: faker.address.country(),
            manufacturer: faker.company.companyName(),
            featured_image: faker.image.image(),
            created_on: db.fn.now(),
            modified_on: db.fn.now(),
            category_id: faker.random.arrayElement(categoryIds)
        };
        
        db.insert(product).into('Product').then((id) => console.log(id));
    }
});