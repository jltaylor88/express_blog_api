const mongoose = require("mongoose");

const connectToDb = async () => {
	try {
		await mongoose.connect(process.env.DB_LOCATION);
		console.log("Connected to MongoDB!");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		process.exit();
	}
};

module.exports = connectToDb;
