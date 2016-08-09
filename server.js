/**
 * 1. touch server.js
 * 2. npm init
 * 3. npm i --save express mongoose morgan body-parser
 * 4. pull in deps, init a cononical express app
 * 5. initialize mongoose
 */

var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    //Routes = require('./routes'),
    path = require('path'),
    port = process.env.PORT || 3001,
    app = express();

app.use(express.static(path.join(__dirname,'public')));

//You will need mongod and mongo running
//use nodemon to run server

mongoose.connect('mongodb://localhost/gear-to-share', (error)=>{
    if(error){
        console.error('mongoose is not working', error)
        process.exit(1); //this will exit your node app
    }else {
        console.log('Mongoose is running')
    }
});

app.post('*', bodyParser.json(),bodyParser.urlencoded({ extended:true}));

//Routes(app);

app.listen(port, (error)=>{
    if(error){
        console.error('Server is not working', error);
        process.exit(1); //will exit your node app
    }else {
        console.log('My gearshare server is running')
    }
});
