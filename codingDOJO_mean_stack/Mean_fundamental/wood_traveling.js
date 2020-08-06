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
var player = {
	location: tigger
};
function move(direction) {
	if (player.location[direction] != undefined) {
		player.location = player.location[direction];
		console.log("You are now at" + player.location.character + "'s house");
	} else {
		console.log("You may not go that way!");
	}
}
move("north");
move("north");
move("north");
