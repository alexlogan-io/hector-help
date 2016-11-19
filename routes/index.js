var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hector Help' });
});

router.get('/hector', function(req, res, next) {
  res.render('hector', { title: 'Hector Help' });
});

router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'Hector Help', type:req.query.type });
});

router.get('/forum', function(req, res, next) {
  res.render('forum', { title: 'Hector Help'});
});

router.get('/forum/:category', function(req, res, next) {
  res.render('forum-category', { title: 'Hector Help', category: req.params.category});
});

router.post('/chat-response', function(req,res){
	var messageBody = req.body.message;

	if(messageBody.includes("suicidal")){
		res.json({response:"Something about going to childline"});
	}
	else if(messageBody.includes("drugs")){
		res.json({response:"Something about going to the police"});
	}
	else{
		res.json({response:"Sorry, I didn't get that."});
	} 	
});

module.exports = router;
