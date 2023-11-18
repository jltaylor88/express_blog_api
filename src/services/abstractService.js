class AbstractService {
	constructor(accessLayer) {
		this.accessLayer = accessLayer;
	}

	async getAll() {
		const res = await this.accessLayer.getAll();
		return res;
	}

	async getById(id) {
		const res = await this.accessLayer.getById(id);
		return res;
	}

	async create(entity) {
		const res = await this.accessLayer.create(entity);
		return res;
	}

	async update(id, entity) {
		const res = await this.accessLayer.update(id, entity);
		return res;
	}

	async delete(id) {
		const res = await this.accessLayer.delete(id);
		return res;
	}
}

module.exports = AbstractService;
