let faker = require('faker');

let db = require('../config');

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
    created_on: db.fn.now(),
    modified_on: db.fn.now()
  };

  categories.push(category);
});

db.insert(categories).into('Category').then((ids) => console.log(ids));