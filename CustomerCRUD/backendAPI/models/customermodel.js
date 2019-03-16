const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for customer
let customerSchema = new Schema({
  customer_id: {
    type: Number
  },
  customer_name: {
    type: String
  },
  customer_emailId: {
    type: String
  }
},{
  collection: 'DPCustomers'
});

const Customer = mongoose.model('customermodel', customerSchema );

module.exports = Customer;
