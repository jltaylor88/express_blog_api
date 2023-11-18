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

module.exports = {
	getUsers,
};
