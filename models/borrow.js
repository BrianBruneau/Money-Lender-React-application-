var mongoose = require('mongoose');

// create a schema
var userSchema = new mongoose.Schema({
  user_id: String,
  amount: Number,
  pb_date: String
});

var Borrow = mongoose.model('Borrow', userSchema);

// make this available to our other files
module.exports = Borrow;