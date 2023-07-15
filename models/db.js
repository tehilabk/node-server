const Mongoose = require('mongoose');

// Connect to MongoDB
const init = () => {
	Mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => {
			console.log('Connected to MongoDB');
		})
		.catch((error) => {
			console.error('Error connecting to MongoDB:', error);
		});
};

module.exports = { init };