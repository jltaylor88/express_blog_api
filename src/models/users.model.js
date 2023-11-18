const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	address: {
		street: {
			type: String,
			required: true,
		},
		suite: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		zipcode: {
			type: String,
			required: true,
		},
		geo: {
			lat: {
				type: String,
				required: true,
			},
			lng: {
				type: String,
				required: true,
			},
		},
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
