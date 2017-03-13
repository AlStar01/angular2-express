let faker = require('faker');

let knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "../products.sqlite"
  }
});

// let categories = [];

// for (let i = 0; i < 100; i++) {
//   let category = {
//     name: faker.commerce.department(),
//     description: faker.lorem.sentence(),
//     created_on: knex.fn.now(),
//     modified_on: knex.fn.now()
//   };

//   categories.push(category);
// }

// knex.returning('id').insert(categories).into('Category').then(function (ids) {
//   console.log(ids);
// });

knex.select('*').from('Category').then(function(rows) {
  console.log(rows);
});