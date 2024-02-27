const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello Fahlan! GET");
});

router.post("/:name", (req, res) => {
	const name = req.params.name;
	res.send(`Hello ${name}! POST`);
});

router.put("/:name", (req, res) => {
	const name = req.params.name;
	res.send(`Hello ${name}! PUT`);
});

module.exports = router;
