const pool = require("../queries");

// fungsi mengambil data seluruh actor
const getAllActors = (req, res) => {
	// query > mengambil data seluruh actor
	pool.query("SELECT * FROM actor;", (error, results) => {
		if (error) {
			console.log(error); // melempar error jika terjadi
			res.status(500).json(error); // set response status 500 dan tampilkan error berupa json
		}
		res.status(200).json(results.rows); // mengirim response hasil dari query
	});
};

// fungsi mengambil data actor berdasarkan id
const getActorsById = (req, res) => {
	const id = parseInt(req.params.id); // mengambil id actor dari path parameter

	// query > mengambil data actor berdasarkan id
	pool.query(
		"SELECT * FROM actor WHERE actor_id = $1",
		[id],
		(error, result) => {
			if (error) {
				console.log(error);
				res.status(500).json(error); // set response status 500 dan tampilkan error berupa json
			} // melempar error jika terjadi
			res.send(result.rows); // mengirim response hadil dari query
		}
	);
};

module.exports = { getAllActors, getActorsById };
