var express = require('express'),
	router = express.Router(),
	bodyParser = require('body-parser');

var Artist = require('../models/artist');
var Employee = require('../models/employee');

router.use(bodyParser.urlencoded( { extended: false } ));

router.get('/', function (req, res) {
	Artist.findAll( function (err, artists) {
		res.json(artists);
	});
});

router.use('/admin', require('./admin'));

module.exports = router;