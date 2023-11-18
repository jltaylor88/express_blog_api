const AbstractService = require("./abstractService");
const postsAccessLayer = require("../data/posts.accessLayer");

class PostsService extends AbstractService {
	constructor(accessLayer) {
		super(accessLayer);
	}
}

const postsService = new PostsService(postsAccessLayer);

module.exports = postsService;
