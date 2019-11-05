const server = require('./api/server');

const port = process.env.PORT || 5000;
require('dotenv').config();
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));