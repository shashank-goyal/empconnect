var express = require('express');
var router = express.Router();
const connection = require('../config/database')
const EventCollection = require('../model/event_collection')
var axios = require("axios");

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/events",function(req,res){
        var response = {};
        const collection = connection.get('Events')
        collection.find({},function(err,data){
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                console.log("data>>>>",data);
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    });

router.post('/createevent', function(req,res){
    EventCollection.create(req.body,function(err, album){
      res.redirect('/events')
    })
  })
module.exports = router;