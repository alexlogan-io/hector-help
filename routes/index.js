module.exports = function(config){

	var express = require('express');
	var router = express.Router();

	var lastResponse;

	/* GET home page. */
	router.get('/', function(req, res, next) {
		console.log(config.isPrelaunch);
		if(config.preLaunch){
			res.render('comingSoon', { title: 'Hector Help' });
		}else{
	  		res.render('hector', { title: 'Hector Help' });
  		}
	});

	router.get('/hector', function(req, res, next) {
		if(config.preLaunch){
			res.render('comingSoon', { title: 'Hector Help' });
		}else{
			res.render('hector', { title: 'Hector Help' });
		}
	});

	router.get('/about', function(req, res, next) {
	  res.render('about', { title: 'Hector Help' });
	});

	router.get('/chat', function(req, res, next) {
	  res.render('chat', { title: 'Hector Help', type:req.query.type });
	});

	router.get('/forum', function(req, res, next) {
	  res.redirect('/forum/teasing');
	});

	router.get('/forum/:category', function(req, res, next) {
	  res.render('forum-category', { title: 'Hector Help', category: req.params.category});
	});

	router.post('/chat-response', function(req,res){
		var messageBody = req.body.message;

		if(lastResponse === undefined){

			if(messageBody.includes("suicidal")){
				lastResponse = "Something about going to childline";
				res.json({response:lastResponse});
			}
			else if(messageBody.includes("drugs")){
				lastResponse = "Something about going to the police";
				res.json({response:lastResponse});
			}
			else{
				res.json({response:"Sorry, I didn't get that."});
			}
		}
		else if(lastResponse.includes()){

		}
		else if(lastResponse.includes()){

		}  	
	});

	return router;
};

