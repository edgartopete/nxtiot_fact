/**
* 
* vue.config.js
*
* This file setup the configuration for deploy the app to heroku 
*
*
* [created] : 11/02/2019
* [author]: ETF
*/

// Use manipulate the file path 
const path = require('path');

module.exports ={
    outputDir: path.resolve(__dirname,'../server/public'),
    devServer:{
        proxy:{
            '/api':{
                target: 'http://localhost:5000'
            }
        }
    }
}