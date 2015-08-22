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

router.post('/', function (req, res) {
	console.log('post artists');
	res.sendStatus(200);
});

router.put('/:id', function (req, res) {
	console.log('put artists', req.params.id);
	res.sendStatus(200);
});

router.delete('/:id', function (req, res) {
	console.log('delete artists', req.params.id);
	res.sendStatus(200);
});

module.exports = router;