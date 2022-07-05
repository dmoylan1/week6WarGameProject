
const suits = ["♥", "♦", "♠", "♣"];
const value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const deck = [];

function newDeck() {
//loop through all suits (4) with all values (13)
for(var suitCounter = 0; suitCounter < 4; suitCounter++) {
    for(var valueCounter = 0; valueCounter < 13; valueCounter++) {
    deck.push(value[valueCounter] + suits[suitCounter]);
    }
    }
return deck;
}

function shuffle() {
    for(var i = 0; i < 52; i++) {
        var currentCard = deck[i];
        var randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = currentCard;
    }
    }
    
    var testDeck = newDeck();
    shuffle(testDeck);
    console.log(testDeck);


// class Card {
//     constructor(value, suit) {
//         this.value = value;
//         this.suit = suit;
//     }

//     method() {
//         // make it do something
//     }

// };

// class Deck {
//     constructor(cards) {
//         this.cards = cards; 
//     }

//     method() {
//         // make it do something
//     }

// };

// class Player {
//     constructor(name) {
//         this.name = name;
//     }

//     method() {
//         // make it do something
//     }

// };