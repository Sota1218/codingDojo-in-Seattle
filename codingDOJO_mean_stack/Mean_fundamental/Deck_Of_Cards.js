class Card {
	constructor() {
		this.deck = [];
		this.suit = ["Hearts", "Clubs", "Diamonds", "Spades"];
		this.string_value = [
			"Ace",
			"Two",
			"Three",
			"Four",
			"Five",
			"Six",
			"Seven",
			"Eight",
			"Nine",
			"Ten",
			"Jack",
			"Queen",
			"King"
		];
		this.numerical_value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
	}
	show() {
		console.log(this.deck);
		// return this.deck;
	}
	create() {
		for (var i = 0; i < this.suit.length; i++) {
			for (var j = 0; j < this.string_value.length; j++) {
				this.deck.push([
					this.suit[i],
					this.string_value[j],
					this.numerical_value[j]
				]);
			}
		}
		return this.deck;
	}
}
// var a = new Card();
// a.show();
class Deck extends Card {
	// constructor() {
	// 	super(this.suit, this.string_value, this.numerical_value, this.deck);
	// }
	shuffle() {
		var cards = super.create();
		var n = cards.length,
			t,
			i;
		while (n) {
			i = Math.floor(Math.random() * n--);
			t = cards[n];
			cards[n] = cards[i];
			cards[i] = t;
		}
		return cards;
	}
	reset() {
		var cards = super.create();
		return cards;
	}
	deal() {
		var cards = this.shuffle();
		var one_card = cards.pop();
		return one_card;
	}
}
class Player {
	constructor(name) {
		this.name = name;
		this.hand = [];
	}
	show_hand() {
		console.log(this.hand);
	}
	take(deck, num) {
		for (var i = 0; i < num; i++) {
			var card_taken = deck.deal();
			this.hand.push(card_taken);
		}
		return this.hand;
	}
	discard() {
		this.hand.pop();
		return this;
	}
}

var a = new Player("aaa");
var thisdeck = new Deck();
console.log(a.take(thisdeck, 5));
a.discard()
	.discard()
	.discard();
a.show_hand();
// // var b = new Card();
// // b.create();
// // b.show();
// a.create();
// a.show();
// console.log(a.shuffle());
// console.log(a.reset());
