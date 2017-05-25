'use strict';

const router = require('express').Router();
const Campus  = require('../../db/models/campus');

// ROUTER PARAMS
// ------------------------------------

router.param('id', (req, res, next, id) => {
  Campus.findById(id)
  .then( campus => {
    if(!campus) res.status(404).send('Campus does not exist!');
    req.campus = campus;
    next()
    return null;
  })
  .catch(next);
});

// ROUTES
// -----------------------------------

// GET all campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(res.status(200).send.bind(res))
  .catch(next);
})

// GET a campus by id
router.get('/:id', (req, res, next) => {
  res.send(req.campus)
})

// POST new campus
router.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(res.status(201).send.bind(res))
  .catch(next);
});

// PUT updated campus info for one campus
router.put('/:id', (req, res, next) => {
  req.campus.update(req.body)
  .then(res.status(200).send.bind(res))
  .catch(next);
})

// DELETE a campus
router.delete('/:id', (req, res, next) => {
  req.campus.destroy()
  .then( () => res.status(204).end())
  .catch(next);
});

module.exports = router;
