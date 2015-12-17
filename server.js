// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express           = require('express');        // call express
var app               = express();                 // define our app using express
var bodyParser        = require('body-parser');
var methodOverride    = require('method-override');
var passport          = require('passport')
var mongoose          = require('mongoose');
var FacebookStrategy  = require('passport-facebook').Strategy
var config            = require('./config');
var utilities         = require('./src/utilities');

// Configure and connect to database
mongoose.connect('mongodb://localhost/habitz');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Connected to database')
});

require('./src/utilities/db');


passport.use(new FacebookStrategy({
    clientID: config.facebook_app_id,
    clientSecret: config.facebook_app_secret,
    callbackURL: config.facebook_callback_url
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    // User.findOrCreate(..., function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
  }
));




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

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    next(); // make sure we go to the next routes and don't stop here
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
