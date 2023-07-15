const Mongoose = require('mongoose');

// Define a schema and model for a "Product" collection
const productSchema = new Mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: false
	}
});

module.exports = Mongoose.model('Product', productSchema);