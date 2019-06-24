var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(2512, function(){
    console.log("swag API running on port 2512...")
})