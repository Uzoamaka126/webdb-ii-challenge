
exports.up = function(knex) {
    return knex.schema.table('cars', table => {
        table.renameColumn('model', 100);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
