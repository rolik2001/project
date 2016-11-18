var express = require('express');
var router = express.Router();
var db = require('orm').db;
var User = db.models.users;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main',{layout: 'layouts/other'});
});

router.post('/login',function(req, res, next) {
  User.create({text:req.body.text}, function(err, users){
    if(err){
      res.send(err);
    } else{
    res.render('main',{layout: 'layouts/other'});
  }
});
});

module.exports = router;
