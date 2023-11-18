const AbstractAccessLayer = require("./abstractAccessLayer");
const Post = require("../models/post.model");

class PostsAccessLayer extends AbstractAccessLayer {
	constructor(model) {
		super(model);
	}
}

const postsAccessLayer = new PostsAccessLayer(Post);

module.exports = postsAccessLayer;
