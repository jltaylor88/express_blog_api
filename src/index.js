const { config } = require("dotenv");
const app = require("./routes");
config();

const PORT = process.env.PORT || 3001;

const connectToDb = require("./data/utils/connectToDB");

const main = async () => {
	await connectToDb();
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

main();
