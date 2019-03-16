const express = require('express');
const app = express();
const customerRoutes = express.Router();

// Require customer model in our routes module
let customerModel = require('../models/customermodel');

// Defined store route
customerRoutes.route('/add').post(function (req, res) {
  let customer = new customerModel(req.body);
  customer.save()
    .then(customer => {
      res.status(200).json({'customer': 'customer added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = customerRoutes;
