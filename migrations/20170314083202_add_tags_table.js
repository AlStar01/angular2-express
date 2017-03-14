exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('Tag'),
        knex.schema.createTableIfNotExists('Tag', function (table) {
            table.increments().primary();
            table.string('name', 55).notNullable().unique();
            table.timestamp('created_on').defaultTo(knex.fn.now());
            table.timestamp('modified_on').defaultTo(knex.fn.now());
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('Tag')
    ]);
};
