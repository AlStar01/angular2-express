let faker = require('faker');

exports.seed = function (knex, Promise) {
    let promises = [];
    
    return knex('Rating').del().then(() => {
        knex('product').pluck('id').then((productIds) => {
            productIds.forEach((productId) => {
                let quantity = faker.random.number({
                    min: 2,
                    max: 10
                });

                let ratings = [];

                for (let i = 0; i < quantity; i++) {
                    let userCard = faker.helpers.userCard();

                    let rating = {
                        author: userCard.username,
                        stars: faker.random.number({
                            min: 0,
                            max: 5
                        }),
                        review: faker.lorem.sentences(),
                        product_id: productId,
                        created_on: knex.fn.now(),
                        modified_on: knex.fn.now()
                    };

                    ratings.push(rating);
                }

                promises.push(knex('Rating').insert(ratings));
            });

            return Promise.all(promises);
        });
    });
};