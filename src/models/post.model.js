const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
