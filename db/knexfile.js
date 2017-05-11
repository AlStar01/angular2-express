// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: '../db/products.sqlite'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  }
};