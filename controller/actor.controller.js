const pool = require("../queries");

// fungsi mengambil data seluruh actor
const getAllActors = (req, res) => {
	// query > mengambil data seluruh actor
	pool.query("SELECT * FROM actor;", (error, results) => {
		if (error) {
			throw error; // melempar error jika terjadi
		}
		res.send(results.rows); // mengirim response hasil dari query
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
			if (error) throw error; // melempar error jika terjadi
			res.send(result.rows); // mengirim response hadil dari query
		}
	);
};

module.exports = { getAllActors, getActorsById };
