'use strict';

var router = require('express').Router();
var UserService = require('../services/user');

router.route('/user')

	// List
	.get((req, res) => 
	  UserService.list()
		.then( list =>
			res.json(list)
		)
  )

  // Create
  .post((req, res) => 
     UserService.create(req.body)
      .then( user => 
        res.json(user)
      , err => 
        res.sendStatus(422) 
      )
  );

router.route('/user/:id')

  // Show
  .get((req, res) => 
    UserService.show(req.params.id)
      .then( user => { 
        if (!user) {
            res.sendStatus(404)
          }
          res.json(user)
        }
      , err =>
        res.sendStatus(400)
    )
  )
  
  // Update
  .put((req, res) => 
    UserService.update(req.params.id, req.body)
      .then( user =>
        res.json(user)
      , err =>
        res.sendStatus(404)
    )
  )

  // DELETE
  .delete((req, res) => 
    UserService.delete(req.params.id)
      .then(() =>
        res.sendStatus(200) 
      , err =>
        res.sendStatus(404)
    )
  );

module.exports = router;
