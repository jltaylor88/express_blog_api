const usersAccessLayer = require("../data/users.accessLayer");

const AbstractService = require("./abstractService");

class UsersService extends AbstractService {
	constructor(accessLayer) {
		super(accessLayer);
	}
}

const usersService = new UsersService(usersAccessLayer);

module.exports = usersService;
