const express = require("express");
const app = express();
const server = app.listen(1337);
const io = require("socket.io")(server);
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rateMyCakes", { useNewUrlParser: true });
app.use(express.static(__dirname + "/public/dist/public"));
var counter = 0;

// MAKE SURE YOU HAVE THESE. LIKE SERIOUSLY.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ok cool.

require("./public/server/Routes/routes")(app);

app.listen(8000, () => {
	console.log("Listening on port 8000");
});
io.on("connection", function(socket) {
	//2

	socket.emit("greeting", {
		msg: "Greetings, from server Node, brought to you by Sockets! -Server"
	}); //3
	socket.on("thankyou", function(data) {
		//7
		console.log(data.msg); //8 (note: this log will be on your server's terminal)
	});
});
