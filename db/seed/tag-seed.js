let faker = require('faker');

let db = require('../config');

let tags = [];

for (let i = 0; i < 55; i++) {
    tags.push(faker.commerce.productAdjective().toLowerCase());
    tags.push(faker.company.bsAdjective().toLowerCase());
    tags.push(faker.company.catchPhraseAdjective().toLowerCase());
}

tags = [...new Set(tags)];

tags = tags.map((tag) => {
    return {
        name: tag,
        created_on: db.fn.now(),
        modified_on: db.fn.now()
    };
});

db.insert(tags).into('Tag').then((ids) => console.log(ids));