var express = require('express');
var request = require('request');
var router = express.Router();



router.get('/', function(req, res) {
	request({
		url: 'https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=' + req.query.city + '&q[state_cont]=' + req.query.state + '&radius=20',
		headers: {
			'X-Mashape-Key': process.env.MASHAPE_KEY,
			'Accept': 'text/plain'
		}
	}, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var dataObj = JSON.parse(body);
			res.render("results", {results: dataObj.places});
		}
	})
})

router.get('/parks', function(req, res) {
	request({
		url: 'https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=' + req.query.city + '&q[state_cont]=' + req.query.state + '&radius=20',
		headers: {
			'X-Mashape-Key': process.env.MASHAPE_KEY,
			'Accept': 'text/plain'
		}
	}, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var dataObj = JSON.parse(body);
			
		}
	})


	res.render('parks.ejs');
});


module.exports = router;