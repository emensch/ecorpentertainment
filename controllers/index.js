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

router.post('/admin', function (req, res) {
	console.log(req.body);
	res.sendStatus(200);
});

router.use('/artists', require('./artists'));
router.use('/employees', require('./employees'));

module.exports = router;