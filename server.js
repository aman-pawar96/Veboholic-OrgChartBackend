const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db =require('./config/db');
const app =express();
const port =8000;

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT,    PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
mongoClient.connect(db.url ,(err,database)=>{
    if(err) return console.log(err)
    require('./app/routes')(app, database);
    app.listen(port,()=>{
        console.log("Project is Live");
    })
})