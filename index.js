var express = require('express'),
	bodyParser = require('body-parser'),
	db = require('./db');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded( { extended: false } ));

// Must open database connection before requiring models
db.connect('database/app.db', function (err) {
	if (err) {
		return console.log(err);
	}
});

var Artist = require('./models/artist');
var Employee = require('./models/employee');

app.get('/', function (req, res) {
	Artist.findAll( function (err, artists) {
		res.json(artists);
	});
});

app.get('/admin', function (req, res) {
	res.render('admin.jade')
});

app.post('/admin', function (req, res) {
	console.log(req.body);
	res.sendStatus(200);
});

var server = app.listen(3000, function () {
	var port = server.address().port;
	console.log('Listening on port %s...', port);
});
