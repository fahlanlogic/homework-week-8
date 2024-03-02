const pool = require("../queries");
const fs = require("fs");

// membaca query untuk menambahkan data actor
const insertActorSQL = fs.readFileSync("./seedings/seeding.sql", {
	encoding: "utf8",
});

// fungsi menambahkan data actor
// query > menambahkan data actor
pool.query(insertActorSQL, (error, results) => {
	if (error) console.log(error);
	console.log("Seeding Completed!");
	pool.end; // menutup koneksi
});
