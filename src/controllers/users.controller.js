const { default: mongoose } = require("mongoose");
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

const getUserById = async (req, res) => {
	try {
		// Get the id from the request
		const id = req.params.id;
		// Check this is a valid ObjectId
		if (!mongoose.isValidObjectId(id)) {
			// Todo: format error response
			res.status(404).send("ID is an invalid Object ID");
			return;
		}
		// Get the user
		const user = await usersService.getUserById(id);

		// If there is no user with this id, send a 404
		if (!user) {
			res.status(404).send("No user with this ID");
			return;
		}
		// Send the user
		res.send(user);
	} catch (error) {
		res.status(500).send(error);
	}
};

// TODO: include validation for non-unique email and username
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

const updateUser = async (req, res) => {
	// Get the id from the request
	const id = req.params.id;
	// Get the user from the request body
	const user = req.body;

	try {
		// Check this is a valid ObjectId
		if (!mongoose.isValidObjectId(id)) {
			// Todo: format error response
			res.status(404).send("ID is an invalid Object ID");
			return;
		}
		// Update the user
		const updatedUser = await usersService.updateUser(id, user);

		// If there is no user with this id, send a 404
		if (!updatedUser) {
			res.status(404).send("No user with this ID");
			return;
		}

		// Send the user
		res.send(updatedUser);
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
};
