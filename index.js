const express = require("express");
const pool = require("./queries");
const actorRouter = require("./routes/actor.routes");
const filmRouter = require("./routes/film.routes");
const app = express();
const port = 3000;

app.use("/api/actor", actorRouter);  	// menggunakan route untuk actor
app.use("/api/film", filmRouter);			// menggunakan route untuk film

// membuat port server
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

// menghubungkan ke database
pool.connect((err, res) => {
	if (err) console.log(err);
	console.log("Connected to database");
});
