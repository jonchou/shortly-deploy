// NOTE: this file is not needed when using MongoDB
var db = require('../config');

// var Link = require('../models/link');

var Link = require('../db/shortly-mongoose');

var Links = new db.Collection();

Links.model = Link;

module.exports = Links;



