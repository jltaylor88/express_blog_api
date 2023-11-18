const abstractController = require("./abstractController");
const postsService = require("../services/posts.service");

class PostsController extends abstractController {
	constructor(service) {
		super(service);
	}
}

const postsController = new PostsController(postsService);

module.exports = postsController;
