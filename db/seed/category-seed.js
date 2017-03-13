let faker = require('faker');

let knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "../products.sqlite"
  }
});

let categories = [];
let departments = [];

for (let i = 0; i < 250; i++) {
  departments.push(faker.commerce.department());
}

departments = [...new Set(departments)];

departments.forEach((department) => {
  let category = {
    name: department,
    description: faker.lorem.sentence(),
    created_on: knex.fn.now(),
    modified_on: knex.fn.now()
  };

  categories.push(category);
});

knex.insert(categories).into('Category').then(function (id) {
  console.log(id);
});