var express = require('express');
var Borrow = require('../models/borrow');
var router = express.Router();


router.route('/')
  .get(function(req, res) {
    Borrow.find(function(err, borrows) {
      if (err) return res.status(500).send(err);
      res.send(borrows);
    });
  })
  .post(function(req, res) {
    console.log(req.body)
    Borrow.create(req.body, function(err, borrow) {
      if (err) return res.status(500).send(err);
      res.send(borrow);
    });
  });

router.get('/:id', function(req, res) {
  Borrow.findById(req.params.id, function(err, borrow) {
    if (err) return res.status(500).send(err);
    res.send(borrow);
  });
})
.put(function(req, res) {
    Borrow.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    Borrow.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;