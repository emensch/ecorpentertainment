var express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	Sequelize = require('sequelize');

var sequelize = new Sequelize(null, null, null, {
	dialect: 'sqlite',
	storage: './database/app.db'
});

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(methodOverride('_method'));

//app.use(require('./controllers'));

var server = app.listen(3000, function () {
	var port = server.address().port;
	console.log('Listening on port %s...', port);
});
