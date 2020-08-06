const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect("mongodb://localhost/tasks", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const TaskSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, minlength: 2 },
		description: { type: String, required: true, minlength: 2 }
	},
	{ timestamps: true }
);
const Task = mongoose.model("Task", TaskSchema);
app.get("/tasks", (req, res) => {
	Task.find()
		.then(person => res.json(person))
		.catch(err => res.json(err));
});
app.get("/tasks/:id", (req, res) => {
	Task.findOne({ _id: req.params.id })
		.then(data => res.json(data))
		.catch(err => res.json(err));
});
app.post("/tasks", (req, res) => {
	Task.create(req.body)
		.then(data => {
			console.log("data:", data);
			res.redirect("/tasks");
		})
		.catch(err => res.json(err));
});
app.put("/tasks/:id", (req, res) => {
	Task.updateOne(
		{ _id: req.params.id },
		{ title: req.body.title, description: req.body.description }
	)
		.then(data => {
			console.log("updated_data:", data);
			res.redirect("/tasks");
		})
		.catch(err => res.json(err));
});
app.delete("/tasks/:id", (req, res) => {
	Task.deleteOne({ _id: req.params.id })
		.then(() => res.redirect("/"))
		.catch(err => res.json(err));
});

app.listen(8000, () => console.log("Connect!"));
