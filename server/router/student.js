'use strict';
const router = require('express').Router();
const Student  = require('../../db/models/student');
const Campus  = require('../../db/models/campus');

// ROUTER PARAMS
// -------------------------------------

router.param('id', (req, res, next, id) => {
  Student.findById(id, {
    include: [Campus]
  })
  .then(function(student) {
    if(!student) res.status(404).send('Student not found!');
    req.student = student;
    next();
    return null;
  })
  .catch(next);
});

// ROUTES
// -----------------------------------

// GET api/students route
router.get('/', (req, res, next) => {
  Student.findAll()
  .then(res.status(200).send.bind(res))
  .catch(next);
});

// POST new student
router.post('/', (req, res, next) => {
  Student.create(req.body)
  .then(res.status(201).send.bind(res))
  .catch(next);
});

// GET student by id
router.get('/:id', (req, res, next) => {
  res.send(req.student);
});

// PUT updated student info for one student
router.put('/:id', (req, res, next) => {
  req.student.update(req.body)
  .then(updatedStudent => {
    res.send(updatedStudent)
  })
  .catch(next);
});

// DELETE a student
router.delete('/:id', (req, res, next) => {
  req.student.destroy()
  .then( () => res.status(204).end())
  .catch(next);
})

module.exports = router;
