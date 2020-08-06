const express = require("express");
const app = express();
// app.get("/", (req, res) => {
// 	res.send("Hello");
// });
app.listen(8000, () => console.log("Working"));
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.get("/cars", (req, res) => {
	res.render("cars");
});
app.get("/cats", (req, res) => {
	res.render("cats");
});
app.get("/cars/new", (req, res) => {
	res.render("form");
});
app.get("/John", (req, res) => {
	var cats_array = [{ name: "John", food: "Fish", Age: 4 }];
	res.render("details", { cats: cats_array });
});
app.get("/Sota", (req, res) => {
	var cats_array = [{ name: "Sota", food: "Meet", Age: 3 }];
	res.render("details", { cats: cats_array });
});
