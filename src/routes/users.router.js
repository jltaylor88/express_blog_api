const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router.get("/", async (req, res) => {
	usersController.getUsers(req, res);
});

module.exports = router;
