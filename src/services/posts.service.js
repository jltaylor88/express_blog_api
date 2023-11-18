const AbstractService = require("./abstractService");
const postsAccessLayer = require("../data/posts.accessLayer");
const usersAccessLayer = require("../data/users.accessLayer");

const crudExtenders = {
	create: {
		validateEntity: async (entity, _, additionalAccessLayers) => {
			// Get the userId from the entity
			const userId = entity.userId;

			// Check if the user exists
			const user = await additionalAccessLayers.users.getById(userId);

			// If the user does not exist, throw an error
			if (!user) {
				throw new Error("User does not exist");
			}
		},
	},
};

class PostsService extends AbstractService {
	constructor(accessLayer, crudExtenders, additionalAccessLayers) {
		super(accessLayer, crudExtenders, additionalAccessLayers);
	}
}

const postsService = new PostsService(postsAccessLayer, crudExtenders, {
	users: usersAccessLayer,
});

module.exports = postsService;
