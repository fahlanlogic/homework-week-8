const express = require("express");
const actors = require("../controller/actor.controller");
const router = express.Router();

router.get("/", actors.getAllActors); // routes mengambil data seluruh actor
router.get("/:id", actors.getActorsById); // routes mengambil data actor berdasarkan id

module.exports = router;
