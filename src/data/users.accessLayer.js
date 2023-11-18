const User = require("../models/users.model");

const getUsers = async () => {
	return await User.find();
};

module.exports = {
	getUsers,
};
