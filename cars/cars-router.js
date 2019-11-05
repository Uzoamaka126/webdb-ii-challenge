const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
    db('car-dealer')
    .then(cars => {
        res.json(cars);
    })
    .catch(error => {
        res.status(500).json({
            message: 'Error retrieveing cars' + error.message
        })
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    db('car-dealer').where({ id }).first()
    .then(car => {
      res.json(car);
    }) 
    .catch (err => {
      res.status(500).json({ 
          message: 'Failed to retrieve fruit'  + err.message
        });
    });
  });


  router.post('/', (req, res) => {
    const carData = req.body;
    db('car-dealer').insert(carData)
    .then(ids => {
      db('car-dealer').where({ id: ids[0] })
      .then(newCarEntry => {
        res.status(201).json(newCarEntry);
      });
    })
    .catch (err => {
      console.log('POST error', err);
      res.status(500).json({ 
          message: "Failed to store data"
        });
    });
  });

module.exports = router;