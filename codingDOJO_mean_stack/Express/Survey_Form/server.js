const express = require("express");
const session = require("express-session");
const app = express();

app.listen(5000, () => console.log("Working"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(
	session({
		secret: "keyboardkitteh",
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 60000 }
	})
);
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
	res.render("index");
});
app.post("/submit", (req, res) => {
	console.log(req.body);
	req.session.name = req.body.name;
	req.session.dojo = req.body.dojo;
	req.session.lang = req.body.lang;
	req.session.comment = req.body.comment;
	res.redirect("result");
});
app.get("/result", (req, res) => {
	res.render("result", { data: req.session });
});
