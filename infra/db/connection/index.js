const {	Sequelize } = required('sequelize');

const sequelize_connection = new Sequelize('postgres:localhost:5432', {
	dialect: 'postgres',
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
});

module.exports = sequelize_connection;