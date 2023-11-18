// Todo: create custom error class that accepts a status code and a message
// so can handle errors such as those thrown by valudateId in a more consistent way
// and not just give a 500 error

class AbstractController {
	constructor(service) {
		this.service = service;
	}

	validateId(id) {
		if (!mongoose.isValidObjectId(id)) {
			throw new Error("ID is an invalid Object ID");
		}
	}

	handleEntityNotFound(entity) {
		if (!entity) {
			throw new Error("No entity with this ID");
		}
	}

	async getAll(_, res) {
		try {
			const all = await this.service.getAll();
			res.send(all);
		} catch (error) {
			res.status(500).send(error);
		}
	}

	async getById(req, res) {
		const id = req.params.id;

		try {
			this.validateId(id);
			const byId = await this.service.getById(id);
			this.handleEntityNotFound(byId);
			res.send(byId);
		} catch (error) {
			res.status(500).send(error);
		}
	}

	async create(req, res) {
		const body = req.body;

		try {
			const created = await this.service.create(body);
			res.send(created);
		} catch (error) {
			res.status(500).send(error);
		}
	}

	async update(req, res) {
		const id = req.params.id;
		const body = req.body;

		try {
			this.validateId(id);
			const updated = await this.service.update(id, body);
			this.handleEntityNotFound(updated);
			res.send(updated);
		} catch (error) {
			res.status(500).send(error);
		}
	}

	async delete(req, res) {
		const id = req.params.id;

		try {
			this.validateId(id);
			const deleted = await this.service.delete(id);
			this.handleEntityNotFound(deleted);
			res.send(deleted);
		} catch (error) {
			res.status(500).send(error);
		}
	}
}

module.exports = AbstractController;
