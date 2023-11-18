const usersAccessLayer = require("../data/users.accessLayer");
const getUsers = async () => {
	return await usersAccessLayer.getUsers();
};

module.exports = {
	getUsers,
};
