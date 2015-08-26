var express = require('express'),
	router = express.Router()
	models = require('../models');

router.get('/', function (req, res) {
	models.Artist.findAll().then(function (artists) {
		console.log(artists);
		models.Employee.findAll().then(function (employees) {
			console.log(employees);
			res.render('admin.jade', {
				artists: artists,
				employees: employees
			});
		});
	});
});

router.use('/artists', require('./artists'));
router.use('/employees', require('./employees'));

module.exports = router;