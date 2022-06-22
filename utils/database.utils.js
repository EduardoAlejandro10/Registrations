
const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
	dialect: 'postgres',
	host:'localhost',
	username: 'postgres',
	password: 'cooljeff21',
	port: 5432,
	database: 'registrations',
	logging: false

});

module.exports = {db, DataTypes};




