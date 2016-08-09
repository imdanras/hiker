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


'https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=Seattle&q[state_cont]=Washington&radius=25"'

// router.get('https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=Seattle&radius=25').header("X-Mashape-Key", "ocD09yBCRLmshy5zRdmpPtqwhGINp1qldY3jsngEC2dhf2ljLr")
// .header("Accept", "text/plain")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });
// ,
//     qs: qs
//   }, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       var dataObj = JSON.parse(body);
//       res.send(dataObj.Search);
//     }
//   });
// });

module.exports = router;