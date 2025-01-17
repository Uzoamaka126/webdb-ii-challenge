const express = require('express');
const helmet = require('helmet');
require('dotenv').config();

const fruitsRouter = require('../cars/cars-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', fruitsRouter);

module.exports = server;
