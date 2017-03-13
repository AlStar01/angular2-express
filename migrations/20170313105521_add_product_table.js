exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTableIfNotExists('Product', function (table) {
            table.increments().primary();
            table.string('name', 55).notNullable().unique();
            table.string('description').notNullable();
            table.decimal('price', 2).notNullable();
            table.string('color', 55).notNullable();
            table.string('material', 55).notNullable();
            table.string('origin').notNullable();
            table.string('manufacturer').notNullable();
            table.string('featured_image').notNullable();
            table.timestamp('created_on').defaultTo(knex.fn.now());
            table.timestamp('modified_on').defaultTo(knex.fn.now());

            table.integer('category_id').unsigned();
            table.foreign('category_id').references('Category.id');
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('Product')
    ]);
};
