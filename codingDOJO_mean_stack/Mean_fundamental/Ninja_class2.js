function Ninja(name) {
	this.name = name;
	this.health = 100;
	var speed = 3;
	var strength = 3;
	this.sayName = function() {
		console.log("My ninja name is " + this.name + "!");
		return this;
	};
	this.showStats = function() {
		console.log(
			"Name: " +
				this.name +
				", Health: " +
				this.health +
				", Speed: " +
				speed +
				", Strength: " +
				strength
		);
		return this;
	};
	this.drinkSake = function() {
		this.health += 10;
		return this;
	};
	this.punch = function(opponent) {
		this.opponent = opponent;
		this.opponent.health -= 5;
		console.log(
			this.opponent.name +
				" was punched by " +
				this.name +
				" and lost 5 health!"
		);
		return this;
	};
	this.kick = function(opponent) {
		this.opponent = opponent;
		this.opponent.health -= 15 * strength;
		console.log(
			this.opponent.name +
				" was kicked by " +
				this.name +
				" and lost " +
				15 * strength +
				" health!"
		);
		return this;
	};
}
var ninja1 = new Ninja("Hyabusa");
var ninja2 = new Ninja("Goemon");
const auto = new Ninja("test");
console.log(auto instanceof Ninja);
console.log(auto instanceof Object);
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

ninja1
	.kick(ninja2)
	.kick(ninja2)
	.kick(ninja2);
ninja2.showStats();
