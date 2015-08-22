var express = require('express'),
	router = express.Router(),
	Employee = require('../models/employee');

router.get('/new', function (req, res) {
	res.render('manage_employee.jade', {
		method: 'POST',
		title: 'New employee'
	});
});

router.get('/edit', function (req, res) {
	res.render('manage_employee.jade', {
		method: 'PUT',
		title: 'New employee'
	});
});

module.exports = router;