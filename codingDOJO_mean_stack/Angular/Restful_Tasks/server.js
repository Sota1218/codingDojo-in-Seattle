const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/taskapi", { useNewUrlParser: true });
app.use(express.static(__dirname + "/public/dist/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./public/server/Routes/routes")(app);

app.listen(8000, () => {
	console.log("Listening on port 8000");
});
