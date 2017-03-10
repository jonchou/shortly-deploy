var mongoose = require('mongoose');
// var autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost/shortlydb');

// var connection = mongoose.createConnection('mongodb://localhost/test');

var db = mongoose.connection;
// autoIncrement.initialize(db);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});

module.exports = db;