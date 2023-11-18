const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router.get("/", async (req, res) => {
	usersController.getAll(req, res);
});

router.get("/:id", async (req, res) => {
	usersController.getById(req, res);
});

router.post("/", async (req, res) => {
	usersController.create(req, res);
});

router.patch("/:id", async (req, res) => {
	usersController.update(req, res);
});

router.delete("/:id", async (req, res) => {
	usersController.delete(req, res);
});

module.exports = router;
