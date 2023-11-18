const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.controller");

router.get("/", async (req, res) => {
	postsController.getAll(req, res);
});

router.get("/:id", async (req, res) => {
	postsController.getById(req, res);
});

router.post("/", async (req, res) => {
	postsController.create(req, res);
});

router.patch("/:id", async (req, res) => {
	postsController.update(req, res);
});

router.delete("/:id", async (req, res) => {
	postsController.delete(req, res);
});

module.exports = router;
