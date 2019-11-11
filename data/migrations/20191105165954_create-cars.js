
exports.up = function(knex) {
    return knex.schema.createTable('car-dealer', table => {
        // primary key, auto incrementing, not null etc
        table.increments('id');
    
        // create a 'name' column, unique, not-nullable, text, 128
        table.decimal('VIN').unique().notNullable();
        table.text('make', 100);
        table.text('model', 100);
        table.text('mileage', 100);
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('car-dealer');
};
