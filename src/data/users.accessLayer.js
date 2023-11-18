const User = require("../models/users.model");

const AbstractAccessLayer = require("./abstractAccessLayer");

class UsersAccessLayer extends AbstractAccessLayer {
	constructor(model) {
		super(model);
	}
}

const usersAccessLayer = new UsersAccessLayer(User);

module.exports = usersAccessLayer;
