const pool = require("../queries");
const fs = require("fs");

// membaca query untuk mengambil data seluruh film
const getAllFilmSQL = fs.readFileSync("./sql/get.all.film.sql", {
	encoding: "utf8",
});

// fungsi mengambil data seluruh film
const getAllFilm = (req, res) => {
	// query > mengambil data seluruh film
	pool.query(getAllFilmSQL, (error, results) => {
		if (error) throw error;
		res.send(results.rows);
	});
};

module.exports = getAllFilm;
