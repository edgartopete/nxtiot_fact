/**
* 
* Fact.js
*
* This file defines the schema of out facts in our database.
*
* [created] : 10/31/2019
* [author]: ETF
*/

// Use mongoose to setup our Schema and Model
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create a FactSchema object
var FactSchema = new Schema({
  // `_id` is required and of type String
  _id: {
    type: String,
    required: true
  },
  // `text` is required and of type String
  text: {
    type: String,
    required: true
  },
  // `Source` is required and of type String
  source: {
    type: String,
    required: true
  },
  // `SourceUrl` is required and of type String
  sourceUrl: {
    type: String,
    required: true
  }
},
  {
    //set to false the id generation to be able to insert the one get from the external api
    _id: false,
    //set the versionKey to false to not be store
    versionKey: false
  }
);

// This creates our model from the above schema, using mongoose model method
var Fact = mongoose.model("Fact", FactSchema);

// Export the Fact model
module.exports = Fact;