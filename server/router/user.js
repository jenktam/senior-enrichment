'use strict';

const router = require('express').Router();
const User  = require('../../db/models/user');

// ROUTER PARAMS
// -------------------------------------

router.param('id', (req, res, next, id) => {
  User.findById(id)
  .then(function(user) {
    if(!user) res.status(404).send('User not found!');
    req.user = user;
    next();
    return null;
  })
  .catch(next);
});

// ROUTES
// -----------------------------------

// GET api/users route
router.get('/', (req, res, next) => {
  User.findAll()
  .then(res.status(200).send.bind(res))
  .catch(next);
});

// POST new student
router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(res.status(201).send.bind(res))
  .catch(next);
});

// GET student by id
router.get('/:id', (req, res, next) => {
  res.send(req.user);
});

// PUT updated student info for one student
router.put('/:id', (req, res, next) => {
  req.user.update(req.body)
  .then(updatedUser => {
    res.send(updatedUser)
  })
  .catch(next);
});

// DELETE a student
router.delete('/:id', (req, res, next) => {
  req.user.destroy()
  .then( () => res.status(204).end())
  .catch(next);
})

module.exports = router;
