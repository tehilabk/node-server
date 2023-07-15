// Middleware for validating required fields
const validatePostSchema = (req, res, next) => {
	const { name, price } = req.body;
	if (!name || !price) {
		return res.status(400).send('Name and price are required fields');
	}
	return next();
};

const errorMiddleware = (err, req, res, next) => {
	console.error(err.stack);
	if (res.status == 400) {

	}
	if (res.status == 404) {

	}
	res.status(500).send('500: Internal Server Error');
}

module.exports = { validatePostSchema, errorMiddleware };