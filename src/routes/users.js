'use strict';

var router = require('express').Router();
var Users  = require('../models/users');

router.route('/users')

  // GET ALL
  .get(function(req, res) {
    Users.find({}, function(err, users) {
        if (err) {
          res.send(err);
        }
        res.json(users);
    });
  })

  // ADD
  .post(function(req, res) {
    var user = new Users();
    user.name = req.body.name;

    user.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  });

router.route('/users/:userId')

  // GET ONE
  .get(function(req, res) {
    Users.findById(req.params.userId, function(err, user) {
        if (err) {
          res.send(err);
        }
        res.json(user);
    });
  })

  // EDIT
  .put(function(req, res) {
    Users.findById(req.params.userId, function(err, user) {
      if (err) {
          res.send(err);
      }
      user.name = req.body.name;
      user.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json(user);
      });
    });
  })

  // DELETE
  .delete(function(req, res) {
    Users.remove({_id: req.params.userId}, function(err, user) {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
});


module.exports = router;
