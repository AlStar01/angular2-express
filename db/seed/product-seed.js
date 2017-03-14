let faker = require('faker');

let knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "../products.sqlite"
    },
    useNullAsDefault: true
});

let products = [];
let categories = [];

knex.pluck('id').from('category').orderBy('id').then(function (ids) {
    categories = ids;

    for (let i = 0; i < 100; i++) {
        let product = {
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            price: faker.commerce.price(),
            color: faker.commerce.color(),
            material: faker.commerce.productMaterial(),
            origin: faker.address.country(),
            manufacturer: faker.company.companyName(),
            featured_image: faker.image.image(),
            created_on: knex.fn.now(),
            modified_on: knex.fn.now(),
            category_id: faker.random.arrayElement(categories)
        };

        products.push(product);
    }

    knex.insert(products).into('Product').then(function (id) {
        console.log(id);
    });
});