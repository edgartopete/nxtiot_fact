/**
* 
* post.js
*
* This file setup the routes to get and post the information to the database.
*
*
* [created] : 10/31/2019
* [author]: ETF
*/

// Use expres for the routes
const express = require("express");
// Use axios to get information from a external api
const axios = require('axios');
// Use mongose to conect and work with the Database 
const mongoose = require("mongoose");

//Declare objets for routs, external api url and the db models
const router = express.Router();
const url ='https://uselessfacts.jsph.pl/random.json';
const db = require("../../models");


//To get all the facts from the data base 
router.get('/', async (req,res)=>{
  db.Fact.find({})
  .then(function(dbFact) {
    // If we were able to successfully find facts, send them back to the client
    res.json(dbFact);
  })
  .catch(function(err) {
    // If an error occurred, send it to the client
    res.json(err);
  });

});

//Add fact that the external api resolve to the databae  
router.post('/',async (req,res)=>{
    //use axios to get the information from the external api 
    const resp = await axios.get(url);
    //asing the responce to an object
    const data = resp.data;
    // Create an empty result object
    var result = {};
    // Add the id, text, source and sourcelink and save them as properties of the result object
    result._id = data.id;
    result.text = data.text;
    result.source = data.source;
    result.sourceUrl = data.source_url;
    // Create a new Fact using the `result` object built from the response of the api call
    await db.Fact.create(result)
    .then(function(dbfact) {
        //if inserted send the information to the client 
        res.status(201).send();     
    })
    .catch(function(err) {
      // If an error occurred, log it
      res.json(err)
    });
    
    
});

//Delete a fact from the database the match the received [id] 
router.delete('/:id', async (req, res)=>{
    await db.Fact.deleteOne({_id: req.params.id})
    .then(function(dbFact){
      res.status(200).send();
    })
    .catch(function(err) {
      // If an error occurred, log it
      res.json(err)
    });
    
});

// Connect to the Mongo DB
mongoose.connect('mongodb://etopete:etf1234@ds141228.mlab.com:41228/heroku_40pk55pd',{
    useNewUrlParser:true,
    useUnifiedTopology: true 
});
//export the routes 
module.exports = router;