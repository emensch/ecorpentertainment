var express = require('express'),
	router = express.Router(),
	Artist = require('../models/artist');

router.get('/new', function (req, res) {
	res.render('manage_artist.jade', {
		method: 'POST',
		title: 'New artist'
	});
});

router.get('/edit', function (req, res) {
	res.render('manage_artist.jade', {
		method: 'PUT',
		title: 'Edit artist'
	});
});

module.exports = router;