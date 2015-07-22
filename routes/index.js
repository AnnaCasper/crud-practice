var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET concerts index
router.get('/concerts', function(req, res, next){
  res.render('concerts');
});

module.exports = router;
