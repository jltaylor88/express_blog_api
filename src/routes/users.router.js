const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router.get("/", async (req, res) => {
	usersController.getUsers(req, res);
});

router.post("/", async (req, res) => {
	usersController.createUser(req, res);
});

module.exports = router;
