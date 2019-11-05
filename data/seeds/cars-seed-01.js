
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {name: 'BMW', model: 'X-20', color: 'green', manufacturer: 'BMW', available: true},
        {name: 'Ford', model: 'Armani', color: 'white', manufacturer: 'Ford', available: true},
        {name: 'Toyota', model: 'Camry', color: 'grey', manufacturer: 'Toyota', available: true},
      ]);
    });
};
