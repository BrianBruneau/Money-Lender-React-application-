var mongoose = require('mongoose');

// create a schema
var userSchema = new mongoose.Schema({
  Name: String,
  Password: String,
  role: String
});

userSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      id: ret._id,
      email: ret.email,
      name: ret.name
    };
    return returnJson;
  }
});

var User = mongoose.model('User', userSchema);

// make this available to our other files
module.exports = User;