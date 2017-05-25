'use strict';
var Sequelize = require('sequelize')
var db = require('../_db')

var User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: '/images/default-photo.jpg'
  },
  gender: {
    type: Sequelize.ENUM('Male', 'Female'),
  }
});

/*
firstname
lastname
fullname - hook
email
gender

Association:
students manyToOne relationship

*/
module.exports = User;
