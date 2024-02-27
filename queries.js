const express = require("express");
const Pool = require("pg").Pool;
const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "express-db",
	password: "postgres",
	port: 5432,
});

module.exports = pool;
