
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments('id');
      table.text('name', 100).unique().notNullable();
      table.varchar('model', 100);
      table.text('color', 100);
      table.text('manufacturer', 100);
      table.boolean('available').default(0);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
