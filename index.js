var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var resultsCtrl = require('./controllers/results');
var app = express();

app.use(require('morgan')('dev'));
app.use(ejsLayouts);
app.use(express.static('public'));
app.use("/results", resultsCtrl);

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index.ejs');
});

app.listen(3000);