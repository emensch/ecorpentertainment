var db = require('../db').get();

var createstr = String.prototype.concat(
	'ID INTEGER PRIMARY KEY AUTOINCREMENT, ',
	'name TEXT NOT NULL, ',
	'position TEXT NOT NULL, ',
	'bio TEXT NOT NULL'
);

db.run('CREATE TABLE IF NOT EXISTS employees ('+createstr+')');

module.exports.findById = function(id, cb) {
	db.get('SELECT * FROM employees WHERE ID = $id', {
		$id: id
	}, function (err, row) {
		if (err) {
			return cb(err);
		}

		cb(null, row);
	});
}

module.exports.findAll = function (cb) {
	db.all('SELECT * FROM employees', function (err, rows) {
		if (err) {
			return cb(err);
		}

		cb(null, rows);
	});
};

module.exports.create = function (cb, body) {

};

module.exports.update = function (cb, body) {

};

module.exports.delete = function (cb, body) {

};