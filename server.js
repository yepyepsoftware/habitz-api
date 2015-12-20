// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express         = require('express');        // call express
var app             = express();                 // define our app using express
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var mongoose        = require('mongoose');
var utilities       = require('./src/utilities');

// configure database
//Connect to database
mongoose.connect('mongodb://localhost/habitz');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Connected to database')
});

require('./src/utilities/db');

// get all data of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// carse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));



// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


// Middleware to use for all requests
app.use(function(req, res, next) {
  // Enable CORS
  res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use('/api/user', require('./src/controllers/user'));
app.use('/api/habit', require('./src/controllers/habit'));

// Send 404 in case of invalid request.
app.use(function(req, res) {
  console.log("Invalid request: " + req.protocol + '://' + req.get('host') + req.originalUrl)
  res.sendStatus(404);
});


// START THE SERVER
// =============================================================================
app.listen(process.env.PORT || 8080);
console.log('Server running');
