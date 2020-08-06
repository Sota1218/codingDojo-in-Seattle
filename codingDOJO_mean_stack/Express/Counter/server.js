const express = require("express");
const app = express();

app.listen(5000, () => console.log("Working"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
const session = require("express-session");
app.use(
	session({
		secret: "keyboardkitteh",
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 60000 }
	})
);
app.get("/", (req, res) => {
	if (req.session.count == null) {
		req.session.count = 1;
	} else {
		req.session.count++;
	}
	var context = {
		count: req.session.count
	};
	res.render("counter", context);
});
app.get("/count", (req, res) => {
	req.session.count++;
	res.redirect("/");
});
app.get("/reset", (req, res) => {
	req.session.count = null;
	res.redirect("/");
});
