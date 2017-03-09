var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');



// mongoose.connect('mongodb://localhost/test');

var connection = mongoose.createConnection('mongodb://localhost/test');

var db = mongoose.connection;
autoIncrement.initialize(db);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!

  // var kittySchema = mongoose.Schema({
  //   name: String
  // });

  // var Kitten = mongoose.model('Kitten', kittySchema);





  // var userSchema = new mongoose.Schema({
  //   // id: { type: mongoose.Schema.Types.ObjectId},
  //   username: String,
  //   password: String,
  //   timestamp: Date
  // });

  // userSchema.plugin(autoIncrement.plugin, 'User');

  // // creating the class
  // var User = mongoose.model('User', userSchema);

  // module.exports.user = mongoose.model('User', userSchema);


  // var linkSchema = new mongoose.Schema({
  //   url: String,
  //   baseUrl: String,
  //   code: String,
  //   title: String,
  //   visits: Number,
  //   timestamp: Date
  // });

  // linkSchema.plugin(autoIncrement.plugin, 'Link');

  // var Link = mongoose.model('Link', linkSchema);

  // module.exports.link = mongoose.model('Link', linkSchema);




  // var brian = new User({username: 'brian', password: 'pass', timestamp: new Date()});


});


var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  timestamp: Date
});
userSchema.plugin(autoIncrement.plugin, 'User');
module.exports.user = mongoose.model('User', userSchema);

var linkSchema = new mongoose.Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  timestamp: Date
});

linkSchema.plugin(autoIncrement.plugin, 'Link');

module.exports.link = mongoose.model('Link', linkSchema);




