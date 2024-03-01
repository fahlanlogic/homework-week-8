const pool = require("../queries");
const fs = require("fs");

const getCategoriesSQL = fs.readFileSync("./sql/get.categories.sql", {
	encoding: "utf8",
});
// fungsi mengambil data category
const getCategories = (req, res) => {
	// query > mengambil data table category
	pool.query(getCategoriesSQL, (error, results) => {
		if (error) {
			console.log(error); // tampilkan error di console
			res.status(400).json(error); // set response status 400 dan tampilkan error berupa json
		}
		res.send(results.rows); // mengirim response hasil dari query
	});
};

module.exports = getCategories;
