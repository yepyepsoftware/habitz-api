'use strict';
var router = require('express').Router();
var HabitService = require('../services/habit');

router.route('/')

  // List
  .get((req, res) =>
    HabitService.list()
      .then((list) => {
        res.json(list)
      }, (err) => {
        res.sendStatus(400)
      })
  )

  // Create
  .post((req, res) =>
    HabitService.create(req.body)
      .then((habit) => {
        res.json(habit)
      }, (err) => {
        res.sendStatus(422)
      })
  )

router.route('/:id')

  // Show
  .get((req, res) => {
    HabitService.show(req.params.id)
      .then((habit) => {
        if (!habit) {
          res.sendStatus(404)
        }
        res.json(habit)
      }
      , (err) => {
        res.sendStatus(400)
      })
  })

  // Update
  .put((req, res) =>
    HabitService.update(req.params.id, req.body)
      .then((habit) => {
        res.json(habit)
      }, (err) => {
        res.sendStatus(404)
      })
  )

  // DELETE
  .delete((req, res) =>
    HabitService.delete(req.params.id)
      .then(() => {
        res.sendStatus(200)
      }, (err) => {
        res.sendStatus(404)
      })
  );

module.exports = router;
