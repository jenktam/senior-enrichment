'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

const Student = require('./student')
const Campus = require('./campus')

// will add foreign key for campusId in the Student model
// and give Student .setCampus() and .getCampus() instance methods
Student.belongsTo(Campus);

// give Campus addStudent, etc.
//  maintain 1:m relationship
Campus.hasMany(Student);

module.exports = { Student, Campus }