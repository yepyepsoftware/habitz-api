'use strict';
var router = require('express').Router();
var HabitzService = require('../services/habitz');

router.route('/habitz')

  // List
  .get((req, res) => {
    HabitzService.list()
      .then((habitzArray) => 
        res.json(habitzArray)
      )
  })

  // Create
  .post((req, res) => {
    HabitzService.create(req.body)
      .then((habitz) => 
        res.json(habitz)
      , (err) => 
        res.sendStatus(422) 
      )
  })
  
router.route('/habitz/:id')

  // Show
  .get((req, res) => {
    HabitzService.show(req.params.id)
      .then((habitz) => { 
        if (!habitz) {
            res.sendStatus(404)
          }
          res.json(habitz)
        }
      , (err) =>
        res.sendStatus(400)
    )
  })
  
  // Update
  .put((req, res) => {
    HabitzService.update(req.params.id, req.body)
      .then((habitz) =>
        res.json(habitz)
      , (err) =>
        res.sendStatus(404)
    )
  })

  // DELETE
  //TODO: Does not work yet, no time to fix!
  .delete(function (req, res) {
    HabitzService.delete(req.params.id)
      .then(() =>
        res.sendStatus(200) 
      , (err) =>
        res.sendStatus(404)
    )
});


module.exports = router;
