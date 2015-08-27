var express = require('express'),
	router = express.Router(),
	Artist = require('../models').Artist;

router.get('/new', function (req, res) {
	res.render('manage_artist.jade', {
		method: 'POST',
		title: 'New artist',
		artist: {}
	});
});

router.get('/edit/:id', function (req, res) {
	Artist.findById(req.params.id)
		.then(artistFindSuccess)
		.catch(artistFindFailed);

	function artistFindSuccess(artist) {
		res.render('manage_artist.jade', {
			method: 'PUT',
			title: 'Edit artist',
			artist: artist
		});		
	}

	function artistFindFailed(err) {
		console.log(err);
		console.sendStatus(500);
	}
});

router.post('/', function (req, res) {
	Artist.create({
		name: req.body.name,
		logo: req.body.logo,
		description: req.body.description,
		soundcloud: req.body.soundcloud,
		facebook: req.body.facebook,
		twitter: req.body.twitter,
		instagram: req.body.instagram,
		youtube: req.body.youtube,
		website: req.body.website
	})
		.then(artistCreateSuccess)
		.catch(artistCreateFailed);

	function artistCreateSuccess() {
		return res.redirect('/admin');
	}

	function artistCreateFailed(err) {
		console.log(req.body);
		console.log(err);
		return res.sendStatus(500);
	}
});

router.put('/:id', function (req, res) {
	Artist.findById(req.params.id)
		.then(artistFindSuccess)
		.catch(artistFindFailed);

	function artistFindSuccess(artist) {
		artist.updateAttributes({
			name: req.body.name,
			logo: req.body.logo,
			description: req.body.description,
			soundcloud: req.body.soundcloud,
			facebook: req.body.facebook,
			twitter: req.body.twitter,
			instagram: req.body.instagram,
			youtube: req.body.youtube,
			website: req.body.website
		})
			.then(artistUpdateSuccess)
			.catch(artistUpdateFailed);

		function artistUpdateSuccess() {
			return res.redirect('/admin');
		}

		function artistUpdateFailed(err) {
			console.log(req.body);
			console.log(err);
			return res.sendStatus(500);
		}
	}

	function artistFindFailed(err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.delete('/:id', function (req, res) {
	Artist.findById(req.params.id)
		.then(artistFindSuccess)
		.catch(artistFindFailed);

	function artistFindSuccess(artist) {
		artist.destroy()
			.then(artistDeleteSuccess)
			.catch(artistDeleteFailed);

		function artistDeleteSuccess() {
			res.redirect('/admin');
		}

		function artistDeleteFailed(err) {
			console.log(err);
			res.sendStatus(500);
		}
	}

	function artistFindFailed(err) {
		console.log(err);
		res.sendStatus(500);
	}
});

module.exports = router;