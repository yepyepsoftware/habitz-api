'use strict';

var router = require('express').Router();
var Habit  = require('../models/habit');

router.route('/habit')

  // GET ALL
  .get(function(req, res) {
    Habit.find({}, function(err, habits) {
        if (err) {
          res.send(err);
        }
        res.json(habits);
    });
  })

  // ADD
  .post(function(req, res) {
    var habit = new Habit();
    habit.value = req.body.value;

    habit.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json(habit);
    });
  })


  // EDIT
  .put(function(req, res) {
    Habit.findById(req.body._id, function(err, habit) {
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

router.route('/habit/:habitId')

  // GET ONE
  .get(function(req, res) {
    Habit.findById(req.params.habitId, function(err, habit) {
        if (err) {
          res.send(err);
        }
        res.json(habit);
    });
  })

  // EDIT
  .post(function(req, res) {
    console.log(req.params);
    Habit.findById(req.params.habitId, function(err, habit) {
      if (err) {
          res.send(err);
      }
      console.log(req.body);
      habit.value = req.body.value;
      habit.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json(habit);
      });
    });
  })

  // DELETE
  .delete(function(req, res) {
    Habit.remove({_id: req.params.habitId}, function(err, habit) {
      if (err) {
        res.send(err);
      }
      res.json(habit);
    });
});


module.exports = router;
