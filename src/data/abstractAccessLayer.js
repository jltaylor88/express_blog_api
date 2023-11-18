class AbstractAccessLayer {
	constructor(model) {
		this.model = model;
	}

	async getAll() {
		return await this.model.find();
	}

	async getById(id) {
		return await this.model.findById(id);
	}

	async create(entity) {
		const e = new this.model(entity);
		return await e.save();
	}

	async update(id, entity) {
		return await this.model.findByIdAndUpdate(id, entity, {
			new: true,
		});
	}

	async delete(id) {
		return await this.model.findByIdAndDelete(id);
	}
}

module.exports = AbstractAccessLayer;
