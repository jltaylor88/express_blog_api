const usersService = require("../services/users.service");

const getUsers = async (_, res) => {
	try {
		const users = await usersService.getUsers();
		console.log(users);
		res.send(users);
	} catch (error) {
		res.status(500).send(error);
	}
};

const createUser = async (req, res) => {
	// Get the user from the request body
	const user = req.body;

	try {
		// Create the user
		const createdUser = await usersService.createUser(user);
		// Send the user
		res.send(createdUser);
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	getUsers,
	createUser,
};
