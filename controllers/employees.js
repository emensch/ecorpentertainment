var express = require('express'),
	router = express.Router(),
	Employee = require('../models/employee');

router.get('/new', function (req, res) {
	res.render('manage_employee.jade', {
		method: 'POST',
		title: 'New employee',
		employee: {}
	});
});

router.get('/edit/:id', function (req, res) {
	Employee.findById(req.params.id, function (err, employee) {
		res.render('manage_employee.jade', {
			method: 'PUT',
			title: 'Edit employee',
			employee: employee
		});
	});
});

router.post('/', function (req, res) {
	console.log('post employees');
	res.sendStatus(200);
});

router.put('/:id', function (req, res) {
	console.log('put employees', req.params.id);
	res.sendStatus(200);
});

router.delete('/:id', function (req, res) {
	console.log('delete employees', req.params.id);
	res.sendStatus(200);
});

module.exports = router;