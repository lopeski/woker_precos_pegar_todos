const Products = require('../models/product')

function getAllProductsUpdate() {
	return await Products.findAll()
}

exports.module = {
	findUpdatesProducts: getAllProductsUpdate
}