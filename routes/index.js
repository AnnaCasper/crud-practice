var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGO_URI_CONCERTS)
var concertCollection = db.get('concerts')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET concerts index
router.get('/concerts', function(req, res, next){
  res.render('concerts');
});

//GET concerts new
router.get('/concerts/new', function(req, res, next){
  res.render('concerts/new')
})

module.exports = router;
