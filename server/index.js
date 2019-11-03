/**
* 
* index.js
*
* This file setup a express server to run on port 5000 and defines the routes 
* that the the app will use. 
*
* [created] : 10/31/2019
* [author]: ETF
*/

// Use expres as a web Server
const express = require("express")
//factallows cross domain resources call 
const cors = require("cors");
// Use bodyParser to access the request data
const bodyParser = require("body-parser");

// Setup the server 
const app = express();

app.use(bodyParser.json());
app.use(cors());
//Import the api routes 
const fact = require("./routes/api/fact");

app.use('/api/fact',fact);
//Handle production server 
if (process.env.NODE_ENV === 'production'){
    //Static folder
    app.use(express.static(__dirname + '/public/'));

    //Habdle SPA
    app.get(/.*/,(req,res) => res.sendFile(__dirname + '/public/index.html'));
}
// Asing the port for the development and production server
const port =process.env.PORT || 5000;



// Start the server
app.listen(port, ()=> console.log(`Server started on port ${port}`));


