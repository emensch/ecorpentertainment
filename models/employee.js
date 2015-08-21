var db = require('../db').get();

var createstr = String.prototype.concat(
	'ID INTEGER PRIMARY KEY AUTOINCREMENT, ',
	'name TEXT NOT NULL, ',
	'photo TEXT NOT NULL '
);

db.run('CREATE TABLE IF NOT EXISTS employees ('+createstr+')');

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