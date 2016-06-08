var mongoose = require('mongoose');

// create a schema
var lendSchema = new mongoose.Schema({
  user_id: String,
  borrow_id: String,
  amount: Number
});

var Lend = mongoose.model('Lend', userSchema);

// make this available to our other files
module.exports = Lend;