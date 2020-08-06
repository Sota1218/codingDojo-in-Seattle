const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost/dogs", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const DogSchema = new mongoose.Schema(
	{
		name: String,
		age: Number,
		favorite_food: String
	},
	{ timestamps: true }
);
const Dog = mongoose.model("Dog", DogSchema);
//put all routes without variables before routes with variables

app.get("/", (req, res) => {
	Dog.find()
		.sort({ createdAt: -1 })
		.then(data => res.render("index", { dogs: data }))
		.catch(err => res.json(err));
});

app.get("/dogs/new", (req, res) => {
	res.render("new");
});

app.post("/dogs", (req, res) => {
	Dog.create(req.body).then(data => {
		console.log("Here's the data:", data);
		res.redirect("/");
	});
});

app.get("/dogs/:id", (req, res) => {
	Dog.findOne({ _id: req.params.id })
		.then(data => {
			res.render("show", { dog: data });
		})
		.catch(err => {
			console.log(err);
			// res.send(err);
			res.redirect("/");
		});
});

app.get("/dogs/edit/:id", (req, res) => {
	Dog.findOne({ _id: req.params.id })
		.then(data => {
			res.render("edit", { dog: data });
		})
		.catch(err => {
			console.log(err);
			// res.send(err);
			res.redirect("/");
		});
});
app.post("/dogs/:id", (req, res) => {
	const Data = req.body;
	Dog.updateOne(
		{ _id: req.params.id },
		{ name: Data.name, Age: Data.age, favorite_food: Data.favorite_food }
	)
		.then(data => {
			console.log("data:", data);
			res.redirect("/dogs/" + req.params.id);
		})
		.catch(err => {
			console.log(err);
			// res.send(err);
			res.redirect("/");
		});
});
app.get("/dogs/destroy/:id", (req, res) => {
	Dog.deleteOne({ _id: req.params.id })
		.then(data => {
			res.redirect("/");
		})
		.catch(err => {
			console.log(err);
			// res.send(err);
			res.redirect("/dogs/edit" + req.params.id);
		});
});
app.listen(8000, () => console.log("Connected!"));
