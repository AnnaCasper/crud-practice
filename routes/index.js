var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI)
var concertCollection = db.get('concert')

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
});

//POST new concert
router.post('/new', function(req, res, next){
  concertCollection.insert({
    bandName: req.body.bandName,
    concertDate: req.body.concertDate
  }, function(err, data){
    res.redirect('/concerts');
  });
});

module.exports = router;
