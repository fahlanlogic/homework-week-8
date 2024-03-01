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

// membaca query untuk mengambil data film berdasarkan id
const getFilmByIdSQL = fs.readFileSync("./sql/get.film.byid.sql", {
	encoding: "utf8",
});

// fungsi mengambil data film berdasarkan id
const getFilmById = (req, res) => {
	const id = parseInt(req.params.id); // mengambil id film dari path parameter

	pool.query(getFilmByIdSQL, [id], (error, results) => {
		if (error) throw error;
		res.send(results.rows);
	});
};

// membaca query untuk mengambil data film berdasarkan category
const getFilmByCategorySQL = fs.readFileSync("./sql/get.film.by.category.sql", {
	encoding: "utf8",
});
// fungsi mengambil data film berdasarkan category
const getFilmByCategory = (req, res) => {
	let name = req.params.name; // mengambil category dari path parameter
	// query > mengambil data film berdasarkan category
	pool.query(getFilmByCategorySQL, [name], (error, results) => {
		if (error) {
			res.status(400).json(error);
			console.log(error);
		}
		res.status(200).json(results.rows);
	});
};

module.exports = {
	getAllFilm,
	getFilmById,
	getFilmByCategory,
};
