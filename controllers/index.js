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

router.get('/admin', function (req, res) {
	res.render('admin.jade')
});

router.get('/admin/editartist', function (req, res) {
	res.render('manage_artist.jade', {
		method: 'PUT',
		title: 'Edit artist'
	});
});

router.get('/admin/newartist', function (req, res) {
	res.render('manage_artist.jade', {
		method: 'POST',
		title: 'New artist'
	});
});

router.get('/admin/editemployee', function (req, res) {
	res.render('manage_employee.jade', {
		method: 'PUT',
		title: 'Edit employee'
	});
});

router.get('/admin/newemployee', function (req, res) {
	res.render('manage_employee.jade', {
		method: 'POST',
		title: 'New employee'
	});
});

router.post('/admin', function (req, res) {
	console.log(req.body);
	res.sendStatus(200);
});

router.use('/artists', require('./artists'));
router.use('/employees', require('./employees'));

module.exports = router;