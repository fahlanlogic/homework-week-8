const express = require("express");
const pool = require("./queries");
const router = require("./routes");
const app = express();
const port = 3000;

app.use("/", router);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

pool.connect((err, res) => {
	if (err) console.log(err);
	console.log("Connected to database");
});
