var express = require('express'),
	env = require('./env.js'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	models = require('./models');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(methodOverride('_method'));

//app.use(require('./controllers'));

models.sequelize.sync().then(function () {
	var server = app.listen(3000, function () {
		var port = server.address().port;
		console.log('Listening on port %s...', port);
	});
});

