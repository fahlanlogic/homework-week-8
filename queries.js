const Pool = require("pg").Pool;

// membuat koneksi ke database
const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "dvdrental",
	password: "postgres",
	port: 5432,
});

module.exports = pool;
