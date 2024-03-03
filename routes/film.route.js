const express = require("express");
const film = require("../controller/film.controller");
const router = express.Router();

router.get("/", film.getAllFilm); // routes mengambil data seluruh film
router.get("/:id", film.getFilmById); // routes mengambil data film berdasarkan id
router.get("/category/:name", film.getFilmByCategory); // routes mengambil data film berdasarkan category


module.exports = router;
