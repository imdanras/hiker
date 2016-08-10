var express = require('express');
var request = require('request');
var router = express.Router();



router.get('/', function(req, res) {
	request({
		url: 'https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=' + req.query.city + '&q[state_cont]=' + req.query.state + '&radius=20',
		headers: {
			'X-Mashape-Key': 'ocD09yBCRLmshy5zRdmpPtqwhGINp1qldY3jsngEC2dhf2ljLr',
			'Accept': 'text/plain'
		}
	}, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var dataObj = JSON.parse(body);
			res.render("results", {results: dataObj.places});;
		}
	})
})

//AIzaSyAg57CFfCduGwhKOB6ARu6zovvEOGUC36E -- google maps api key
//   <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAg57CFfCduGwhKOB6ARu6zovvEOGUC36E&callback=initMap"type="text/javascript"></script>

// router.get('/:id', function(req, res) {
// 	request({
// 		url: ''
// 	})
// })


module.exports = router;