const { db, DataTypes } = require('../utils/database.utils');


const Register = db.define('registrations', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	},
  entranceTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  exitTime: {
    type: DataTypes.DATE,
    allowNull: true,
		defaultValue: 'currently working',
  },
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'working',
	},
});

module.exports = { Register };
