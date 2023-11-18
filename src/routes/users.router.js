const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router.get("/", async (req, res) => {
	usersController.getUsers(req, res);
});

router.get("/:id", async (req, res) => {
	usersController.getUserById(req, res);
});

router.post("/", async (req, res) => {
	usersController.createUser(req, res);
});

router.patch("/:id", async (req, res) => {
	usersController.updateUser(req, res);
});

module.exports = router;
