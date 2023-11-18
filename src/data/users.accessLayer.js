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

const updateUser = async (id, user) => {
	return await User.findByIdAndUpdate(id, user, {
		new: true,
	});
};

const deleteUser = async id => {
	return await User.findByIdAndDelete(id);
};

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
