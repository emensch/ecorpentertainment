module.exports = function(sequelize, DataTypes) {
	var Artist = sequelize.define('Artist', {
		name: { type: DataTypes.STRING, allowNull: false },
		logo: { type: DataTypes.STRING, allowNull: false },
		description: { type: DataTypes.STRING, allowNull: false },
		soundcloud: DataTypes.STRING,
		facebook: DataTypes.STRING,
		twitter: DataTypes.STRING,
		instagram: DataTypes.STRING,
		youtube: DataTypes.STRING,
		website: DataTypes.STRING
	});

	return Artist;
};