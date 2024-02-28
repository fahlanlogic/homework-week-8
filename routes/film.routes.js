const express = require("express");
const getAllFilm = require("../controller/film.controller");
const router = express.Router();

// routes mengambil data seluruh film
router.get("/", getAllFilm);

module.exports = router;
