'use strict';
const router = require('express').Router();
const Campus  = require('../../db/models/campus');
const Student  = require('../../db/models/student');

// ROUTER PARAMS
// ------------------------------------

router.param('campusId', (req, res, next, campusId) => {
  Campus.findById(campusId, {
    include: [Student]
  })
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
  Campus.findAll({})
  .then(res.status(200).send.bind(res))
  .catch(next);
})

// GET a campus by campusId
router.get('/:campusId', (req, res, next) => {
  res.send(req.campus)
})

// // may not be right
// router.get('/:albumId/image', function (req, res, next) {
//   res.redirect(`/api/campuses/${req.campus.students[0].id}/image`)
// });


// POST new campus
router.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(res.status(201).send.bind(res))
  .catch(next);
});

// PUT updated campus info for one campus
router.put('/:campusId', (req, res, next) => {
  req.campus.update(req.body)
  .then(res.status(200).send.bind(res))
  .catch(next);
})

// DELETE a campus
router.delete('/:campusId', (req, res, next) => {
  req.campus.destroy()
  .then( () => res.status(204).end())
  .catch(next);
});

module.exports = router;
