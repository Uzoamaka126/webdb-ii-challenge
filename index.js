const server = require('./api/server');

const port = process.env.PORT || 5000;
console.log(process.env.NODE_ENV);

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));