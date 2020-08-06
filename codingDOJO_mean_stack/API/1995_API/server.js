const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect("mongodb://localhost/born_in_1995", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const PersonSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, minlength: 2 }
	},
	{ timestamps: true }
);
const Person = mongoose.model("Person", PersonSchema);
app.get("/", (req, res) => {
	Person.find()
		.then(person => res.json(person))
		.catch(err => res.json(err));
});
app.get("/new/:name", (req, res) => {
	Person.create(req.params)
		.then(data => {
			console.log("name:", data);
			res.redirect("/");
		})
		.catch(err => res.json(err));
});
app.get("/remove/:name", (req, res) => {
	Person.deleteOne({ name: req.params.name })
		.then(() => res.redirect("/"))
		.catch(err => res.json(err));
});
app.get("/:name", (req, res) => {
	Person.findOne({ name: req.params.name })
		.then(data => res.json(data))
		.catch(err => res.json(err));
});

app.listen(8000, () => console.log("Connect!"));
