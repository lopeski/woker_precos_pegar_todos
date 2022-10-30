const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Products = sequelize.define('product', {
	product_id: { type: DataTypes.string },
	value: { type: DataTypes.number },
	create: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
	update: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
	shop_update: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
})

(async () => {
	await sequelize.sync( { force: true });
})();

module.exports = Products;