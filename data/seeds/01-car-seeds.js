
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').del()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        {VIN: 2.00, make: 'T', model: 'BMW', mileage: '200' },
        {VIN: 2.01, make: 'M', model: 'Volvo', mileage: '200' },
        {VIN: 2.02, make: 'L', model: 'Toyota', mileage: '200' }
      ]);
    });
};
