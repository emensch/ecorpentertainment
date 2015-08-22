var express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	db = require('./db');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(methodOverride('_method'));

// Must open database connection before requiring models
db.connect('database/app.db', function (err) {
	if (err) {
		return console.log(err);
	}
});

app.use(require('./controllers'));

var server = app.listen(3000, function () {
	var port = server.address().port;
	console.log('Listening on port %s...', port);
});
