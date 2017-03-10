var mongoose = require('mongoose');
var crypto = require('crypto');

// mongoose.Promise = require('bluebird');


var linkSchema = mongoose.Schema({
  url: String,
  baseUrl: String,
  link: String,
  code: String,
  title: String,
  visits: Number,
});


linkSchema.pre('save', function (next) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

var Link = mongoose.model('Link', linkSchema);

module.exports = Link;
