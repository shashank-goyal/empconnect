var express = require('express');
var router = express.Router();
const connection = require('../config/database')
const EventCollection = require('../model/event_collection')
var axios = require("axios");

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


var holidayData = [
    {
        "eventID" : 4,
        "eventCategory" : "Holiday",
        "eventSubCategory" : "Holiday",
        "eventTitle" : "Ayudha Puja",
        "location" : "",
        "dateOfEvent" : "Fri Sep 29 2017 00:00:00 GMT+0530 (IST)",
        "eventLink" : "",
        "Description" : "Festival",
        "image" : ""
    },
    {
        "eventID" : 4,
        "eventCategory" : "Holiday",
        "eventSubCategory" : "Holiday",
        "eventTitle" : "Gandhi Jayanti",
        "location" : "",
        "dateOfEvent" : "Fri Oct 02 2017 00:00:00 GMT+0530 (IST)",
        "eventLink" : "",
        "Description" : "Gandhi birthday",
        "image" : ""
    }

]

router.get("/events",function(req,res){
        var response = {};
        const collection = connection.get('Events')
        collection.find({},function(err,data){
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            holidayData.forEach(function(item){
                response.push(item)
            })
            res.json(response);
        });
    });

router.post('/createevent', function(req,res){
    EventCollection.create(req.body,function(err, album){
      res.redirect('/events')
    })
  })


module.exports = router;