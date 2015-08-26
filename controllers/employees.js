var express = require('express'),
	router = express.Router(),
	Employee = require('../models').Employee;

router.get('/new', function (req, res) {
	res.render('manage_employee.jade', {
		method: 'POST',
		title: 'New employee',
		employee: {}
	});
});

router.get('/edit/:id', function (req, res) {
	Employee.findById(req.params.id)
		.then(employeeFindSuccess)
		.catch(employeeFindFailed);

	function employeeFindSuccess(employee) {
		res.render('manage_employee.jade', {
			method: 'PUT',
			title: 'Edit employee',
			employee: employee
		});		
	}

	function employeeFindFailed(err) {
		console.log(err);
		console.sendStatus(500);
	}
});

router.post('/', function (req, res) {
	Employee.create({
		name: req.body.name,
		position: req.body.position,
		bio: req.body.bio
	})
		.then(employeeCreateSuccess)
		.catch(employeeCreateFailed);

	function employeeCreateSuccess() {
		return res.redirect('/admin');
	}

	function employeeCreateFailed(err) {
		console.log(req.body);
		console.log(err);
		return res.sendStatus(500);
	}
});

router.put('/:id', function (req, res) {
	Employee.findById(req.params.id)
		.then(employeeFindSuccess)
		.catch(employeeFindFailed);

	function employeeFindSuccess(employee) {
		employee.updateAttributes({
			name: req.body.name,
			position: req.body.position,
			bio: req.body.bio
		})
			.then(employeeUpdateSuccess)
			.catch(employeeUpdateFailed);

		function employeeUpdateSuccess() {
			return res.redirect('/admin');
		}

		function employeeUpdateFailed(err) {
			console.log(req.body);
			console.log(err);
			return res.sendStatus(500);
		}
	}

	function employeeFindFailed(err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.delete('/:id', function (req, res) {
	Employee.findById(req.params.id)
		.then(employeeFindSuccess)
		.catch(employeeFindFailed);

	function employeeFindSuccess(employee) {
		employee.destroy()
			.then(employeeDeleteSuccess)
			.catch(employeeDeleteFailed);

		function employeeDeleteSuccess() {
			res.redirect('/admin');
		}

		function employeeDeleteFailed(err) {
			console.log(err);
			res.sendStatus(500);
		}
	}

	function employeeFindFailed(err) {
		console.log(err);
		res.sendStatus(500);
	}
});

module.exports = router;