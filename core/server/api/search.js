var lv = require('../models/base/search');

module.exports = function(req, res) {
  var q;

  // Grab the user's query
  if (typeof req.query.q !== 'undefined' && req.query.q !== null) {
    q = req.query.q;
  }
  else {
    q = '';
  }

  // Search the index and return
  // results
  lv.searchStream(q).toArray(function(results) {
    res.json(results);
  });
}
