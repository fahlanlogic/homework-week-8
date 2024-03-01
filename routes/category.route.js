const express = require("express");
const getCategories = require("../controller/category.controller");
const film = require("../controller/film.controller");
const router = express.Router();

router.get("/", getCategories); // routes mengambil data seluruh category
// router.get("/:id", category.getCategoryById); // routes mengambil data seluruh category
router.get("/:name", film.getFilmByCategory);

module.exports = router;
