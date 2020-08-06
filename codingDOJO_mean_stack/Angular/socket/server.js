const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http");
const socketio = require("socket.io");
const fs = require("fs");
const server = app.listen(1337);
const io = require("socket.io")(server);
mongoose.connect("mongodb://localhost/pets", { useNewUrlParser: true });
app.use(express.static(__dirname + "/public/dist/public"));

// MAKE SURE YOU HAVE THESE. LIKE SERIOUSLY.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ok cool.
require("./public/server/Routes/routes")(app);

io.sockets.on("connection", function(socket) {
	// クライアントからサーバーへ メッセージ送信ハンドラ（自分を含む全員宛に送る）
	socket.on("c2s_message", function(data) {
		// サーバーからクライアントへ メッセージを送り返し
		io.sockets.emit("s2c_message", { value: data.value });
	});

	// クライアントからサーバーへ メッセージ送信ハンドラ（自分以外の全員宛に送る）
	socket.on("c2s_broadcast", function(data) {
		// サーバーからクライアントへ メッセージを送り返し
		socket.broadcast.emit("s2c_message", { value: data.value });
	});
});
// app.listen(8000);
