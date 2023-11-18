const express = require("express");
const usersRouter = require("./users.router");
const postsRouter = require("./posts.router");
const app = express();
app.use(express.json());
// Handle CORS to allow for requests from localhost:3000
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
});
// Routes
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

module.exports = app;
