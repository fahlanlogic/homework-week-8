const pool = require("../queries");
const fs = require("fs");

const getAllActors = (req, res) => {
	pool.query("SELECT * FROM actor;", (error, results) => {
		if (error) {
			throw error;
		}
		res.send(results.rows);
	});
};

const getActorsById = (req, res) => {
	const id = parseInt(req.params.id);

	pool.query(
		"SELECT * FROM actor WHERE actor_id = $1",
		[id],
		(error, result) => {
			if (error) throw error;
			res.send(result.rows);
		}
	);
};

module.exports = { getAllActors, getActorsById };
