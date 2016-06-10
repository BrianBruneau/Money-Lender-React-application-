var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LenderDB');

// if (process.env.MONGO_USER && process.env.MONGO_PASS) {
//   console.log("mongo credentials", process.env.MONGO_USER, process.env.MONGO_PASS);
//   mongoose.connect("mongodb://"+process.env.MONGO_USER+":"+process.env.MONGO_PASS+"@ds011374.mlab.com:11374/lenderspot")
// } else {
//   console.log("mongo credentials", process.env.PROD_MONGODB);
//   mongoose.connect(process.env.PROD_MONGODB);
// }


app.use(express.static(__dirname + '/public/'));

app.use('/api/borrows', require('./controllers/borrows'));
app.use('/api/loans', require('./controllers/loans'));
app.use('/api/users', require('./controllers/users'));



app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000)
