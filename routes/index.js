var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hector Help' });
});

router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'Hector Help' });
});

router.post('/chat-response', function(req,res){
  res.json({response:"a test response"});
});

module.exports = router;
