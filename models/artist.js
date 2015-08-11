var db = require('../db').get();

var createstr = String.prototype.concat(
	'ID INTEGER PRIMARY KEY AUTOINCREMENT, ',
	'logo TEXT NOT NULL, ',
	'name TEXT NOT NULL, ',
	'description TEXT NOT NULL, ',
	'soundcloud TEXT DEFAULT NULL, ',
	'facebook TEXT DEFAULT NULL, ',
	'twitter TEXT DEFAULT NULL, ',
	'instagram TEXT DEFAULT NULL, ',
	'youtube TEXT DEFAULT NULL, ',
	'website TEXT DEFAULT NULL '
);

db.run('CREATE TABLE IF NOT EXISTS artists ('+createstr+')');

module.exports.findAll = function (cb) {
	db.all('SELECT * FROM artists', function (err, rows) {
		if (err) {
			return cb(err);
		}

		cb(null, rows);
	});
};
