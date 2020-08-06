var eeyore = { character: "Eeyore" };
var kanga = { character: "Kanga" };
var christopher = { character: "Christopher Robin" };
var owl = { character: "Owl" };
var piglet = { character: "Piglet" };
var pooh = { character: "Winnie the Pooh" };
var bees = { character: "Bees" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var tigger = { character: "Tigger" };
var heffalumps = { character: "Heffalumps" };

eeyore.east = heffalumps;
eeyore.south = kanga;
kanga.north = eeyore;
kanga.south = christopher;
christopher.north = kanga;
christopher.east = rabbit;
christopher.west = owl;
christopher.south = pooh;
rabbit.west = christopher;
owl.east = christopher;
pooh.north = christopher;
owl.south = piglet;
piglet.north = owl;
rabbit.east = gopher;
gopher.west = rabbit;
piglet.east = pooh;
pooh.west = piglet;
pooh.east = bees;
bees.west = pooh;
bees.north = rabbit;
rabbit.south = bees;
pooh.south = tigger;
tigger.north = pooh;
heffalumps.west = eeyore;
tigger.greet = function() {
	console.log(
		"The wonderful thing about Tiggers is Tiggers are wonderful things!"
	);
};
pooh.greet = function() {
	console.log("The wonderful thing about Poohs is Poohs are wonderful things!");
};
piglet.greet = function() {
	console.log(
		"The wonderful thing about Piglets is Piglets are wonderful things!"
	);
};
bees.greet = function() {
	console.log("The wonderful thing about Bees is Bees are wonderful things!");
};
christopher.greet = function() {
	console.log(
		"The wonderful thing about Robins is Robins are wonderful things!"
	);
};
owl.greet = function() {
	console.log("The wonderful thing about Owls is Owls are wonderful things!");
};
rabbit.greet = function() {
	console.log(
		"The wonderful thing about Rabbits is Rabbits are wonderful things!"
	);
};
gopher.greet = function() {
	console.log(
		"The wonderful thing about Gophers is Gophers are wonderful things!"
	);
};
kanga.greet = function() {
	console.log(
		"The wonderful thing about Kangas is Kangas are wonderful things!"
	);
};
eeyore.greet = function() {
	console.log(
		"The wonderful thing about Eeyores is Eeyores are wonderful things!"
	);
};
heffalumps.greet = function() {
	console.log(
		"The wonderful thing about Heffalumps is Heffalumps are wonderful things!"
	);
};

var player = {
	location: tigger
};
function pickup() {
	if (player.location == bees) {
		player.honey = player.location;
		console.log("You've gathered some honey!");
	} else {
		console.log("Oh,there is no honny...");
	}
}
function mission() {
	console.log("Pooh is looking for honey! Can you help?");
}
function drop() {
	if (player.honey == bees) {
		if (player.location.character == "Winnie the Pooh") {
			player.honey = player.location;
			console.log("Congratulations!You delivered the honey to Pooh!");
		} else {
			console.log("Whoops! This isn't the place that needs the honey!");
		}
	} else {
		console.log("You have to get some honey!");
	}
}
function move(direction) {
	if (player.location[direction] != undefined) {
		player.location = player.location[direction];
		console.log("You are now at" + player.location.character + "'s house");
		player.location.greet();
	} else {
		console.log("You may not go that way!");
	}
}
mission();
move("north");
move("east");
pickup();
move("west");
drop();
