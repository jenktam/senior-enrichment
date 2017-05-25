'use strict';
var Sequelize = require('sequelize')
var db = require('../_db')

var Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '/images/default-photo.jpg'
  },
});

/*
name
image

Associations:
can have many students assigned
1 to many relationship
*/
module.exports = Campus;
