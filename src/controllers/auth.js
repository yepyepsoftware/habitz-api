'use strict';

var router = require('express').Router();
var passport = require('passport');
var FacebookStrategy  = require('passport-facebook').Strategy
var config = require('../../config');
// var UserService = require('../services/user');

// Passport session setup.
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });
passport.use(new FacebookStrategy({
    clientID: config.facebook_app_id,
    clientSecret: config.facebook_app_secret,
    callbackURL: config.facebook_callback_url
  },
  function(accessToken, refreshToken, profile, done) {

    console.log(profile);

    var user = {name: 'foo'}
    done(null, user);

    // UserService.findOrCreate(..., function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
  }
));

// router.route('/account')
// 	.get(ensureAuthenticated, (req, res) => {
//   	res.render('account', { user: req.user });
// 	});

router.route('/auth/facebook')
  .get(passport.authenticate('facebook', { scope : 'email' }))

router.route('/auth/facebook/callback')
	.get(passport.authenticate('facebook', {
		successRedirect : config.client_url,
		failureRedirect: '/login'
	}), (req, res) => {
		res.redirect('/');
	})

router.route('/logout')
	.get((req, res) => {
    req.logout();
    res.redirect(config.client_url);
  });


module.exports = router;



function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
