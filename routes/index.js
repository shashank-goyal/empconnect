var express = require('express');
var router = express.Router();
const connection = require('../config/database')
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
      console.log('inside insert ',err,records)
    })ßß
        //   if (err) throw err;
        //   console.log("Record added as " + records[0]._id);
        //  })
  console.log(req)


    if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.fileUpload;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('public/filename.jpg', function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });

});
router.get("/get-classifieds",function(req,res,next){
  const classifieds = connection.get('classifieds');

  classifieds.find({deletionFlag:false},function(err,data){
    if(err) throw err;
        
    var sortList = data.sort((a,b) => new Date(b.postTimestamp)-new Date(a.postTimestamp))
    res.json({data:sortList}) 
  }).catch(e => e)
})
module.exports = router;