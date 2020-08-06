const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const flash = require("express-flash");
const app = express();
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "mongo 接続エラー ctrl + c:"));
// db.once("open", () => {
// 	console.log("DB接続中... You can cancel from ctrl + c");
// });
app.listen(8000, () => console.log("Working"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: "keyboardkitteh",
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 60000 }
	})
);
app.use(flash());
mongoose.connect("mongodb://localhost/quotes", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const UserSchema = new mongoose.Schema(
	{
		name: String,
		quote: String
	},
	{ timestamps: true }
);
const User = mongoose.model("User", UserSchema);

app.get("/", (req, res) => {
	res.render("index");
});
app.post("/quotes", (req, res) => {
	console.log(req.body);
	const userData = req.body;
	console.log(userData.name);
	User.create(userData)
		.then(data => {
			console.log("data:", data);
			res.redirect("quotes");
		})
		.catch(err => {
			console.log("We have an error!", err);
			// adjust the code below as needed to create a flash message with the tag and content you would like
			for (var key in err.errors) {
				req.flash("registration", err.errors[key].message);
			}
			res.redirect("/");
		});
});
app.get("/quotes", (req, res) => {
	User.find()
		.sort({ createdAt: -1 })
		.then(data => res.render("quotes", { users: data }))
		.catch(err => res.json(err));
});
