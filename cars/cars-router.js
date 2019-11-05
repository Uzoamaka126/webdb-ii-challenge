const express = require('express');
const db = require('../data/db-config');
console.log(process.env.NODE_ENV);

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.json(cars);
    })
    .catch(error => {
        res.status(500).json({
            message: 'Error retrieveing cars' + error.message
        })
    })
});

module.exports = router;