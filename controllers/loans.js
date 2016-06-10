var express = require('express');
var Loan = require('../models/loan');
var Borrow = require('../models/borrow')
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Loan.find(function(err, loans) {
      if (err) return res.status(500).send(err);
      res.send(loans);
    });
  })
  .post(function(req, res) {
    Loan.create(req.body, function(err, loan) {
      if (err) return res.status(500).send(err);

      Borrow.findById(loan.borrow_id, function(err, borrow) {
        if (err) return res.status(500).send(err)
          console.log(borrow.amount)
          var brwamt = parseInt(borrow.amount.substr(1), 10);
          var lnamt = parseInt(loan.amount.substr(1), 10);
          bor = (brwamt - lnamt)
          var dolla ="$" + bor
          borrow.amount = dolla;
          borrow.save();
          res.send({loan: loan, borrow: borrow});

      });
    });
  });

router.get('/:id', function(req, res) {
  Loan.findById(req.params.id, function(err, loan) {
    if (err) return res.status(500).send(err);
    res.send(loan);
  });
})
.put(function(req, res) {
    Loan.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    Loan.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;