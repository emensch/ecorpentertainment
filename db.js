var sqlite3 = require('sqlite3').verbose();

var db = null;

module.exports.connect = function (filename, cb) {
	if(db) {
		return cb(null, db);
	}

	db = new sqlite3.Database(filename, function (err) {
		if(err) {
			db = null;
			return cb(err);
		}

		cb(null, db);
	});
};

module.exports.get = function () {
	return db;
};

module.exports.close = function (cb) {
	db.close( function (err) {
		if (err) {
			return cb(err);
		}

		db = null;
		cb();
	});
};

