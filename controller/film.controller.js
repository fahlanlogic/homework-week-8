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
		if (error) {
			console.log(error); // tampilkan error di console
			res.status(500).json(error); // set response status 500 dan tampilkan error berupa json
		}
		res.status(200).json(results.rows); // mengirim response dari query
	});
};

// membaca query untuk mengambil data film berdasarkan id
const getFilmByIdSQL = fs.readFileSync("./sql/get.film.by.id.sql", {
	encoding: "utf8",
});

// fungsi mengambil data film berdasarkan id
const getFilmById = (req, res) => {
	const id = parseInt(req.params.id); // mengambil id film dari path parameter

	pool.query(getFilmByIdSQL, [id], (error, results) => {
		if (error) {
			console.log(error); // tampilkan error di console
			res.status(500).json(error); // set response status 500 dan tampilkan error berupa json
		}
		res.status(200).json(results.rows); // mengirim response dari query
	});
};

// fungsi mengambil data film berdasarkan category
const getFilmByCategory = (req, res) => {
	let name = req.params.name; // mengambil nama category dari path parameter

	// membaca query untuk mengambil data film berdasarkan category
	const getFilmByCategorySQL = fs.readFileSync(
		"./sql/get.film.by.category.sql",
		{
			encoding: "utf8",
		}
	);

	// query > mengambil data film berdasarkan category
	pool.query(getFilmByCategorySQL, [name], (error, results) => {
		if (error) {
			console.log(error); // tampilkan error di console
			res.status(500).json(error); // set response status 500 dan tampilkan error berupa json
		}
		res.status(200).json(results.rows); // mengirim response dari query
	});
};

module.exports = {
	getAllFilm,
	getFilmById,
	getFilmByCategory,
};
