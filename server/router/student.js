'use strict';
const router = require('express').Router();
const Student  = require('../../db/models/student');
const Campus  = require('../../db/models/campus');

// ROUTER PARAMS
// -------------------------------------

router.param('studentId', (req, res, next, studentId) => {
  Student.findById(studentId, {
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
router.get('/:studentId', (req, res, next) => {
  res.send(req.student);
});

// PUT updated student info for one student
router.put('/:studentId', (req, res, next) => {
  req.student.update(req.body)
  .then(updatedStudent => {
    res.send(updatedStudent)
  })
  .catch(next);
});

// DELETE a student
router.delete('/:studentId', (req, res, next) => {
  req.student.destroy()
  .then( () => res.status(204).end())
  .catch(next);
})

// GET single campus associated to studentId
// CHECK selecStudent AJAX call in AppContainer if doesn't work!!
router.get('/:studentId/campuses', (req, res, next) => {
  req.student.getCampus()
  .then(campus => res.json(campus))
  .catch(next);
});

module.exports = router;
