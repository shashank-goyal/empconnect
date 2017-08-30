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
module.exports = router;
