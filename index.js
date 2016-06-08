var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LenderDB');
// mongoose.connect("mongodb://"+process.env.MONGO_USER+":"+process.env.MONGO_PASS+"@ds011374.mlab.com:11374/lenderspot")

app.use(express.static(__dirname + '/public/'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
