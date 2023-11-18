const usersAccessLayer = require("../data/users.accessLayer");
const getUsers = async () => {
	return await usersAccessLayer.getAll();
};

const getUserById = async id => {
	return await usersAccessLayer.getById(id);
};

const createUser = async user => {
	return await usersAccessLayer.create(user);
};

const updateUser = async (id, user) => {
	return await usersAccessLayer.update(id, user);
};

const deleteUser = async id => {
	return await usersAccessLayer.delete(id);
};

module.exports = {
	getUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
};
