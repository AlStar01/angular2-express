exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('Product_Tag'),
        knex.schema.createTableIfNotExists('Product_Tag', function (table) {
            table.primary(['product_id', 'tag_id']);

            table.integer('product_id').unsigned().notNullable();
            table.foreign('product_id').references('Product.id');

            table.integer('tag_id').unsigned().notNullable();
            table.foreign('tag_id').references('Tag.id');

            table.unique(['product_id', 'tag_id']);
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('Product_Tag')
    ]);
};
