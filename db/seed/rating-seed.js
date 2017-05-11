let faker = require('faker');

let db = require('../config');

return db.del().from('rating').then(() => {
    db.pluck('id').from('Product').orderBy('id').then((productIds) => {
        productIds.forEach((productId) => {
            let quantity = faker.random.number({
                min: 2,
                max: 15
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
                    created_on: db.fn.now(),
                    modified_on: db.fn.now()
                };

                ratings.push(rating);
            }

            db.insert(ratings).into('Rating').then((ids) => console.log(ids));
        });
    });
});