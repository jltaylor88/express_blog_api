const User = require("../models/users.model");

const getUsers = async () => {
	return await User.find();
};

const createUser = async user => {
	const u = new User(user);
	return await u.save();
};

module.exports = {
	getUsers,
	createUser,
};
