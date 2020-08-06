const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const flash = require("express-flash");
const app = express();

app.use(flash());
app.listen(8000, () => console.log("Connect!"));
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

mongoose.connect("mongodb://localhost/assignments", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const CommentSchema = new mongoose.Schema(
	{
		user_commented: { type: String, required: true, minlength: 3 },
		comment: { type: String, required: true, minlength: 3 }
	},
	{ timestamps: true }
);
const UserSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, minlength: 2 },
		message: { type: String, required: true, minlength: 2 },
		comments: [CommentSchema]
	},
	{ timestamps: true }
);
const User = mongoose.model("User", UserSchema);
const Comment = mongoose.model("Comment", CommentSchema);
app.get("/", (req, res) => {
	User.find()
		.sort({ createdAt: -1 })
		.then(data => res.render("index", { users: data }))
		.catch(err => {
			console.log(err);
			res.json(err);
		});
});
app.post("/post", (req, res) => {
	const userData = req.body;
	console.log(userData.name);
	console.log(userData.message);
	User.create(userData)
		.then(data => {
			console.log("data:", data);
			res.redirect("/");
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
app.post("/comment/:id", (req, res) => {
	const userData = req.body;
	Comment.create(userData)
		.then(data => {
			console.log("data:", data);
			User.updateOne({ _id: req.params.id }, { $push: { comments: data } })
				.then(data => {
					console.log("data:", data);
					res.redirect("/");
				})
				.catch(err => {
					console.log("We have an error!", err);
					// adjust the code below as needed to create a flash message with the tag and content you would like
					for (var key in err.errors) {
						req.flash("registration", err.errors[key].message);
					}
					res.redirect("/");
				});
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
