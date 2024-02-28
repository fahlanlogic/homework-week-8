const pool = require("../queries");
const fs = require("fs");

const insertActorSQL = fs.readFileSync("./sql/insert.actor.sql", {
	encoding: "utf8",
});

pool.query(insertActorSQL, (error, results) => {
	if (error) console.log(error);
	console.log("Seeding Completed!");
	pool.end;
});
