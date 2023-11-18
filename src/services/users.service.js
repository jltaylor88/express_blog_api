const usersAccessLayer = require("../data/users.accessLayer");
const getUsers = async () => {
	return await usersAccessLayer.getUsers();
};

const getUserById = async id => {
	return await usersAccessLayer.getUserById(id);
};

const createUser = async user => {
	return await usersAccessLayer.createUser(user);
};

module.exports = {
	getUsers,
	createUser,
	getUserById,
};
