const express = require("express");
const getCategories = require("../controller/category.controller");
const getFilmByCategory =
	require("../controller/film.controller").getFilmByCategory;
const router = express.Router();

router.get("/", getCategories); // routes mengambil data seluruh category
router.get("/:name", getFilmByCategory); // routes mengambil data film berdasarkan nama category

module.exports = router;
