'use strict';

var router = require('express').Router();
var UserService = require('../services/user');

router.route('/')

	// List
	.get((req, res) => {
	  UserService.list()
		.then((list) => {
			res.json(list)
    }, (err) => {
      res.sendStatus(400)
    })
  })

  // Create
  .post((req, res) => {
     UserService.create(req.body)
      .then((user) => {
        res.json(user)
      }, (err) => {
        res.sendStatus(422)
      })
  })

router.route('/:id')

  // Show
  .get((req, res) => {
    UserService.show(req.params.id)
      .then((user) => {
        if (!user) {
          res.sendStatus(404)
        }
        res.json(user)
      }, (err) => {
        res.sendStatus(400)
      })
  })

  // Update
  .put((req, res) => {
    UserService.update(req.params.id, req.body)
      .then((user) => {
        res.json(user)
      }, (err) => {
        res.sendStatus(404)
      })
  })

  // DELETE
  .delete((req, res) => {
    UserService.delete(req.params.id)
      .then(() => {
        res.sendStatus(200)
      }, (err) => {
        res.sendStatus(404)
      })
  })

router.route('/:userId/yep/:habitId')

  // YEP
  .get((req, res) =>  {

    var params = {
      yepd: req.params.habitId
    }

    UserService.update(req.params.userId, params)
      .then((user) => {
        res.json(user)
      }, (err) => {
        res.sendStatus(404)
      })
  })

router.route('/:userId/nope/:habitId')

  // NOPE
  .get((req, res) =>  {

    var params = {
      noped: req.params.habitId
    }

    UserService.update(req.params.userId, params)
      .then((user) => {
        res.json(user)
      }, (err) => {
        res.sendStatus(404)
      })
  })

module.exports = router;
