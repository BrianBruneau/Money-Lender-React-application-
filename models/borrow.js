var mongoose = require('mongoose');

// create a schema
var borrowSchema = new mongoose.Schema({
  user_id: String,
  amount: String,
  pb_date: String
});

var Borrow = mongoose.model('Borrow', borrowSchema);

// make this available to our other files
module.exports = Borrow;