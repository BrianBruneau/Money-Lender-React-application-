var mongoose = require('mongoose');

// create a schema
var loanSchema = new mongoose.Schema({
  user_id: String,
  client_id: String,
  borrow_id: String,
  amount: String
});

var Loan = mongoose.model('Loan', loanSchema);

// make this available to our other files
module.exports = Loan;