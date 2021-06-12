import fs from 'fs';
import readline from 'readline';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import {getHand, getWinner} from "../../../reusable/poker.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("Poker hands");
console.log(`In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:

High Card: Highest value card.
One Pair: Two cards of the same value.
Two Pairs: Two different pairs.
Three of a Kind: Three cards of the same value.
Straight: All cards are consecutive values.
Flush: All cards of the same suit.
Full House: Three of a kind and a pair.
Four of a Kind: Four cards of the same value.
Straight Flush: All cards are consecutive values of same suit.
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
The cards are valued in the order:
2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.

Consider the following five hands dealt to two players:

Hand\t \tPlayer 1\t \tPlayer 2\t \tWinner
1\t \t5H 5C 6S 7S KD \t\t2C 3S 8S 8D TD
\t\tPair of Fives \t\tPair of Eights \t\tPlayer 2

2\t \t5D 8C 9S JS AC\t\t2C 5C 7D 8S QH
\t\tHighest card Ace\tHighest card Queen \tPlayer 1

3\t \t2D 9C AS AH AC\t\t3D 6D 7D TD QD
\t\tThree Aces\t\tFlush with Diamonds \tPlayer 2

4\t \t4D 6S 9H QH QC\t \t3D 6D 7H QD QS
\t\tPair of Queens\t\tPair of Queens\t\tPlayer 1
\t\tHighest card Nine\tHighest card Seven
 
5\t \t2H 2D 4C 4D 4S\t \t3C 3D 3S 9S 9D
\t\tFull House\t\tFull House\t\tPlayer 1
\t\tWith Three Fours\twith Three Threes
 
The file, poker.txt, contains one-thousand random hands dealt to two players. Each line of the file contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.

How many hands does Player 1 win?`);
console.log("https://projecteuler.net/problem=54");
const start = performance.now();

let p1Score = 0;
let total = 0;



const play = (p1, p2) => {
    const h1 = getHand(p1);
    const h2 = getHand(p2);
    const winner = getWinner(h1, h2);
    if (winner == null) {
        console.log("Tie", h1, h2);
    } else {
        if (winner == h1) {
            p1Score++;
        }
        total++;
    }
}


const readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname + '/p054_poker.txt'),
    console: false
});


readInterface.on('line', (line) => {
    const game = line.split(" ");
    const p1 = game.slice(0, 5);
    const p2 = game.slice(5);
    play(p1, p2);
});

readInterface.on('close', () => {
    const result = p1Score;
    const end = performance.now();
    console.log(`Solution (${((end - start) / 1000).toFixed(4)}s): `, result);
});

