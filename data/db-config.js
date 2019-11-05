const knex = require('knex');

const config = require('../knexfile');
const db = knex(config.development);

module.exports = db;
// module.exports = knex(config[process.env.NODE_ENV]);