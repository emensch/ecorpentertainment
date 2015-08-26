module.exports = function(sequelize, DataTypes) {
	var Employee = sequelize.define('Employee', {
		name: { type: DataTypes.STRING, allowNull: false },
		position: { type: DataTypes.STRING, allowNull: false },
		bio: { type: DataTypes.STRING, allowNull: false }
	});

	return Employee;
};