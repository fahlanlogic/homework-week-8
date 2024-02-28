const express = require("express");
const actors = require("../controller/actors.controller");
const router = express.Router();

router.get("/actors", actors.getAllActors);
router.get("/actors/:id", actors.getActorsById);

router.put("/:name", (req, res) => {
	const name = req.params.name;
	res.send(`Hello ${name}! PUT`);
});

module.exports = router;
