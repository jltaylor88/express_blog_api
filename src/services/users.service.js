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

const updateUser = async (id, user) => {
	return await usersAccessLayer.updateUser(id, user);
};

const deleteUser = async id => {
	return await usersAccessLayer.deleteUser(id);
};

module.exports = {
	getUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
};
