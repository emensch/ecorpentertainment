var express = require('express'),
	router = express.Router(),
	bodyParser = require('body-parser');
	models = require('../models');

router.use(bodyParser.urlencoded( { extended: false } ));

router.get('/', function (req, res) {
	models.Artist.findAll().then(function (artists) {
		res.json(artists);
	});
});

router.use('/admin', require('./admin'));

module.exports = router;