const pool = require("../queries");
const fs = require("fs");

const getCategoriesSQL = fs.readFileSync("./sql/get.categories.sql", {
	encoding: "utf8",
});
// fungsi mengambil data category
const getCategories = (req, res) => {
	// query > mengambil data table category
	pool.query(getCategoriesSQL, (error, results) => {
		if (error) throw error; // melempar error jika terjadi
		res.send(results.rows); // mengirim response hasil dari query
	});
};

// const getCategoryById = (req, res) => {
// 	const id = parseInt(req.params.id); // mengambil id category dari path parameter
// 	pool.query(
// 		"SELECT * FROM category WHERE category_id = $1",
// 		[id],
// 		(error, result) => {
// 			if (error) throw error; // melempar error jika terjadi
// 			res.send(result.rows); // mengirim response hadil dari query
// 		}
// 	);
// };

module.exports =
	// getCategoryById,
	getCategories;
