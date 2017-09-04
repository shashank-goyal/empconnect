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
router.get('/insert-classifieds', function(req, res, next) {
  // const classifieds = connection.get('classifieds');
  // data.forEach(function(e){
  //  classifieds.insert(e,function(err,records){
  //   if (err) throw err;
  //   console.log("Record added as " + records[0]._id);
  //  })
  //})

});
router.get("/get-classifieds",function(req,res,next){
  const classifieds = connection.get('classifieds');
  classifieds.find({deletionFlag:false},function(err,data){
    if(err) throw err;
    res.json({data}) 
  })
})
module.exports = router;
