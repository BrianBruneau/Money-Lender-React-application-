var mongoose = require('mongoose');

// create a schema
var userSchema = new mongoose.Schema({
  Name: String,
  Password: String,
  role: String
});

var User = mongoose.model('User', userSchema);

// make this available to our other files
module.exports = User;