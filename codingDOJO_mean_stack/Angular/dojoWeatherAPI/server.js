const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rateMyCakes", { useNewUrlParser: true });
app.use(express.static(__dirname + "/public/dist/public"));

// MAKE SURE YOU HAVE THESE. LIKE SERIOUSLY.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ok cool.

require("./public/server/Routes/routes")(app);

app.listen(4200, () => {
	console.log("Listening on port 4200");
});
