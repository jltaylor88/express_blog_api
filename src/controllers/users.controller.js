const usersService = require("../services/users.service");

const AbstractController = require("./abstractController");

class UsersController extends AbstractController {
	constructor(service) {
		super(service);
	}
}

const usersController = new UsersController(usersService);

module.exports = usersController;
