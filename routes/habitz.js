'use strict';

var router = require('express').Router();
var Habitz  = require('../models/habitz');

router.route('/habitz')

  // GET ALL
  .get(function(req, res) {
    Habitz.find({}, function(err, habitz) {
        if (err) {
          res.send(err);
        }
        res.json(habitz);
    });
  })

  // ADD
  .post(function(req, res) {
    var habitz = new Habitz();
    habitz.value = req.body.value;

    habitz.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json(habitz);
    });
  })


  // EDIT
  .put(function(req, res) {
    Habitz.findById(req.body._id, function(err, habit) {
      if (err) {
        res.send(err);
      }

      habit.value = req.body.value;

      habit.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json(habit);
      });
    });
  })

router.route('/habitz/:habitzId')

  // GET ONE
  .get(function(req, res) {
    Habitz.findById(req.params.habitzId, function(err, habitz) {
        if (err) {
          res.send(err);
        }
        res.json(habitz);
    });
  })

  // EDIT
  .post(function(req, res) {
    console.log(req.params);
    Habitz.findById(req.params.habitzId, function(err, habitz) {
      if (err) {
          res.send(err);
      }
      console.log(req.body);
      habitz.value = req.body.value;
      habitz.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json(habitz);
      });
    });
  })

  // DELETE
  .delete(function(req, res) {
    Habitz.remove({_id: req.params.habitzId}, function(err, habitz) {
      if (err) {
        res.send(err);
      }
      res.json(habitz);
    });
});


module.exports = router;
