var express = require('express'),
	router = express.Router(),
	bodyParser = require('body-parser');
	models = require('../models');

router.use(bodyParser.urlencoded( { extended: false } ));

// router.get('/', function (req, res) {
// 	models.Artist.findAll().then(function (artists) {
// 		res.json(artists);
// 	});
// });

router.get('/', function (req, res) {
	res.render('index.jade');
});

router.get('/artists/argenil', function (req, res) {
	res.render('artist-argenil.jade');
});

router.get('/artists/blume', function (req, res) {
	res.render('artist-blume.jade')
});

router.use('/admin', require('./admin'));

module.exports = router;