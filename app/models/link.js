var db = require('../config');
var db2 = require('../../db/shortly-mongoose');
var crypto = require('crypto');


// db.link
module.exports = db2.link;

var Link = db.Model.extend({
  tableName: 'urls',
  hasTimestamps: true,
  defaults: {
    visits: 0
  },
  initialize: function() {
    this.on('creating', function(model, attrs, options) {
      var shasum = crypto.createHash('sha1');
      shasum.update(model.get('url'));
      model.set('code', shasum.digest('hex').slice(0, 5));
    });
  }
});

// module.exports = Link;
