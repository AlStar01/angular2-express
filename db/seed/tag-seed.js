let faker = require('faker');

let knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "../products.sqlite"
    },
    useNullAsDefault: true
});

let tags = [];

for (let i = 0; i < 55; i++) {
    tags.push(faker.commerce.productAdjective());
    tags.push(faker.company.bsAdjective());
    tags.push(faker.company.catchPhraseAdjective());
}

tags = [...new Set(tags)];

tags = tags.map((tag) => {
    return {
        name: tag,
        created_on: knex.fn.now(),
        modified_on: knex.fn.now()
    };
});

knex.insert(tags).into('Tag').then(function (id) {
    console.log(id);
});