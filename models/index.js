var fs = require('fs'),
	path = require('path'),
	Sequelize = require('sequelize');
	
var sequelize = new Sequelize(null, null, null, {
	dialect: 'sqlite',
	storage: process.env.DB_FILE
});

var db = {};

fs
	.readdirSync(__dirname)
	.filter(function (file) {
		return (file.indexOf('.') !== 0) && (file !== 'index.js');
	})
	.forEach(function (file) {
		var model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;