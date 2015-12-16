// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express         = require('express');        // call express
var app             = express();                 // define our app using express
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var mongoose        = require('mongoose');
var utilities       = require('./utilities')

// configure database
//Connect to database
mongoose.connect('mongodb://localhost/habitz');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Connected to database')
});

// get all data of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// carse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /client/img will be /img for users
app.use(express.static(__dirname + '/client'));





// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.sendFile('./client/index.html')
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use('/api', require('./controllers/user'));
app.use('/api', require('./controllers/habitz'));





// START THE SERVER
// =============================================================================
app.listen(process.env.PORT || 8080);
console.log('Server running');
