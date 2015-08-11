var express = require('express'),
	db = require('./db');

var app = express();

app.use(express.static('public'));

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

var server = app.listen(3000, function () {
	var port = server.address().port;
	console.log('Listening on port %s...', port);
});
