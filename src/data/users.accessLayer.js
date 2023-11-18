const User = require("../models/users.model");

const getUsers = async () => {
	return await User.find();
};

const getUserById = async id => {
	return await User.findById(id);
};

const createUser = async user => {
	const u = new User(user);
	return await u.save();
};

module.exports = {
	getUsers,
	getUserById,
	createUser,
};
