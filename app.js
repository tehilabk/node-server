const Express = require('express');

const Routes = require('./controller/routes');
const Db = require("./models/db")

const PORT = 3000;

const start = async () => {
	await Db.init();

	const app = Express();
	app.use(Express.json());
	app.use(Routes);

	// Start the server
	app.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	});
};

start();
