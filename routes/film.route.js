const express = require("express");
const film = require("../controller/film.controller");
const router = express.Router();

// routes mengambil data seluruh film
router.get("/", film.getAllFilm);
router.get("/:id", film.getFilmById);
router.get("/category/:name", film.getFilmByCategory);


module.exports = router;
