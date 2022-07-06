
//Build cards
const cardSuits = ["♥", "♦", "♠", "♣"];
const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const deck = [];
let player1Cards, player2Cards, p1CardCount, p2CardCount;

//Build deck of cards
function newDeck() {
//loop through all suits (4) with all values (13)
    cardValues.forEach(function (value) {
        cardSuits.forEach(function (suit) {
            var card = {
                value: value,
                suit: suit
            };
            deck.push(card);
        });
    });
}

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {Array}       The shuffled array
 */
 function shuffle (array) {

	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

}

//Game setup
function startGame() {
    shuffle(deck);
    player1Cards = deck.slice(0, deck.length / 2);
    player2Cards = deck.slice((deck.length / 2 ));
    currentCard = 0;
    p1CardCount = 26;
    p2CardCount = 26;

     //testing purposes
    console.log(player1Cards);
    console.log(player2Cards);
}

// Decide who wins round, update cardCount for each player
function roundWinner(p1Card, p2Card, p1CardCount, p2CardCount) {
    var p1Index = cardValues.indexOf(p1Card.value);
    var p2Index = cardValues.indexOf(p2Card.value);

    if (p1Index > p2Index) {
        updateCount(p1CardCount, p2CardCount);
        p1CardCount++;
        p2CardCount--;
        return 'Player 1 wins this round.';
    }
    if (p2Index > p1Index) {
        updateCount(p2CardCount, p1CardCount);
        p2CardCount++;
        p1CardCount--;
        return 'Player 2 wins this round.';

    }
    else {
        return 'It is a tie. Flip again.'
    }
}

function flipCard() {
    //pull current card for each player
    var p1Card = player1Cards[currentCard];
    var p2Card = player2Cards[currentCard];
    var rWinner = roundWinner(p1Card, p2Card);
    
    //Pull new card
    currentCard++;

    //Document round
    console.log(`
    Player 1 flips a ${p1Card.value + p1Card.suit}. 
    Player 2 flips a ${p2Card.value + p2Card.suit}. 
    ${rWinner}`)
}

function updateCount(p1CardCount, p2CardCount) {
    console.log(`
    Player 1 Cards: ${p1CardCount}
    Player 2 Cards: ${p2CardCount}
    `)
}

// Play game Init
newDeck();

// while(p1CardCount > 0 && p2CardCount > 0) {

startGame();
flipCard();
updateCount();
// }