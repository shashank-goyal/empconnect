var express = require('express');
var router = express.Router();
const connection = require('../config/database')
var nodemailer = require('nodemailer');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Employee Connect' });
});
router.get('/test', function(req, res, next) {
  const users = connection.get('Users');
  users.find({}, (err, user) => {
  res.json({success:user})
   }) 

});
router.post('/insert-classifieds', function(req, res, next) {
  // const classifieds = connection.get('classifieds');
  // data.forEach(function(e){
  //  classifieds.insert(e,function(err,records){
  //   if (err) throw err;
  //   console.log("Record added as " + records[0]._id);
  //  })
  //})
  var classifiedsObj = req.body;
  classifiedsObj.title = classifiedsObj.brand + " " + classifiedsObj.model + " " + classifiedsObj.year;
  classifiedsObj.ntId = "sgoyb";
  classifiedsObj.image = "";
  classifiedsObj.postTimestamp = new Date().toUTCString();
  classifiedsObj.deletionFlag = false;

  const classifieds = connection.get('classifieds');
    classifieds.insert(classifiedsObj,function(err,records){
    console.log('inside insert ',err,records);
      if (!req.files)
          return res.status(400).send({status : "error"});

    
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      let sampleFile = req.files.fileUpload;
      let list = sampleFile.name.split(".");
      let ext = list[list.length -1]
      // Use the mv() method to place the file somewhere on your server
      let publicString = 'public';
      let filepath = '/images/classifieds/' +records._id +'.' + ext
      sampleFile.mv(publicString+filepath, function(err) {
          if (err){
             res.status(500).send({status : "error"});
          } else {
            classifieds.update({_id:  records._id}, {$set: {image : filepath }}, function(err, resp){
              if(err){
               res.status(500).send({status : "error"});
              } else{
                res.send({status: "success"});
              }
            })
          }
      });
    })

});
router.get("/get-classifieds",function(req,res,next){
  const classifieds = connection.get('classifieds');

  classifieds.find({deletionFlag:false},function(err,data){
    if(err) throw err;
        
    var sortList = data.sort((a,b) => new Date(b.postTimestamp)-new Date(a.postTimestamp))
    res.json({data:sortList}) 
  }).catch(e => e)
})
router.post("/mail",function(req,res,next){
  console.log("came 1st line")

  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'way2nirmalps@gmail.com', // Your email id
        pass: 'nimmu9388222623' // Your password
    }
  });
  var text = 'Greetings, \n\n' + "Seller's Contact information \n\n Name: John David \n Email:testmail@testmail.com\n Phone Number:9999999999\n\nThanks,\nTeam Employee Connect";
  var mailOptions = {
    from: 'EmployeeConnect from @test.com <donotreply@test.com>', // sender address
    to:req.body.email, // list of receivers
    subject: 'Contact details for the Add - '+req.body.title, // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});


})
module.exports = router;