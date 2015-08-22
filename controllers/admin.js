var express = require('express'),
	router = express.Router();

var Artist = require('../models/artist');
var Employee = require('../models/employee');

router.get('/', function (req, res) {
	Artist.findAll( function (err, artists) {
		Employee.findAll( function (err, employees) {
			res.render('admin.jade', {
				artists: artists,
				employees: employees
			});
		});
	});
});

router.post('/', function (req, res) {
	console.log('post');
	console.log(req.body);
	res.sendStatus(200);
});

router.put('/', function (req, res) {
	console.log('put');
	console.log(req.body);
	res.sendStatus(200);
});

router.use('/artists', require('./artists'));
router.use('/employees', require('./employees'));

module.exports = router;