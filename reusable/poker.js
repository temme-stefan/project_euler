const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]; // 2, ..., 9, 10, Jake, Queen, King, Ass
const colors = ["D", "H", "S", "C"];// Diamonds,Hearts,Spades,Cross
const hands = ["High Card", "One Pair", "Two Pairs", "Three of a Kind", "Straight", "Flush", "Full House", "Four of a Kind", "Straight Flush", "Royal Flush"];

const order = hand => {
    hand.sort((a, b) => Math.sign(cards.indexOf(a[0]) - cards.indexOf(b[0])));
}

const isSuited = hand => hand.every(([card, color]) => color == hand[0][1]);
const isStraight = hand => hand.every(([card, color], i) => i == 0 || cards.indexOf(hand[i - 1][0]) + 1 == cards.indexOf(card));
const groupByCard = hand => [...hand.reduce((a, card) => {
    if (!a.has(card[0])) {
        a.set(card[0], []);
    }
    a.get(card[0]).push(card);
    return a;
}, new Map())].map(p => p[1]);

export const getHand = hand => {
    order(hand);
    const suited = isSuited(hand);
    const straight = isStraight(hand);
    const groups = groupByCard(hand);
    let hInd = 0;

    switch (true) {
        case suited && straight && hand[4][0] == "A":
            hInd = hands.indexOf("Royal Flush");
            break;
        case suited && straight:
            hInd = hands.indexOf("Straight Flush");
            break;
        case suited:
            hInd = hands.indexOf("Flush");
            break;
        case straight:
            hInd = hands.indexOf("Straight");
            break;
        case groups.length == 2 && groups.some(g => g.length == 4):
            hInd = hands.indexOf("Four of a Kind");
            break;
        case groups.length == 2:
            hInd = hands.indexOf("Full House");
            break;
        case groups.length == 3 && groups.some(g => g.length == 3):
            hInd = hands.indexOf("Three of a Kind");
            break;
        case groups.length == 3:
            hInd = hands.indexOf("Two Pairs");
            break;
        case groups.length == 4:
            hInd = hands.indexOf("One Pair");
            break;
        default:
            hInd = hands.indexOf("High Card");
            break;
    }

    return {
        hand: hands[hInd],
        hInd,
        suited,
        straight,
        groups,
        original: hand
    }
}

const breakByColor = (hand1, hand2) => null;
const breakByHighCard = (hand1, hand2) => {
    for (let i = 4; i >= 0; i--) {
        const c1 = cards.indexOf(hand1.original[i][0])
        const c2 = cards.indexOf(hand2.original[i][0])
        if (c1 != c2) {
            return c1 < c2 ? hand2 : hand1;
        }
    }
    return null;
}
const gSorter = (a, b) => a.length == b.length ? Math.sign(cards.indexOf(a[0][0]) - cards.indexOf(b[0][0])) : Math.sign(a.length - b.length);

const breakByGroups = (hand1, hand2) => {

    const g1 = hand1.groups;
    const g2 = hand2.groups;
    g1.sort(gSorter);
    g2.sort(gSorter);
    for (let i = g1.length - 1; i > 0; i--) {
        const c1 = cards.indexOf(g1[i][0][0]);
        const c2 = cards.indexOf(g2[i][0][0])
        if (c1 != c2) {
            return c1 < c2 ? hand2 : hand1;
        }
    }
    return null;
}


const breakTies = new Map([
    ["High Card", breakByHighCard],
    ["One Pair", breakByGroups],
    ["Two Pairs", breakByGroups],
    ["Three of a Kind", breakByGroups],
    ["Straight", breakByHighCard],
    ["Flush", breakByHighCard],
    ["Full House", breakByGroups],
    ["Four of a Kind", breakByGroups],
    ["Straight Flush", breakByHighCard],
    ["Royal Flush", breakByColor]
]);

export const getWinner = (hand1, hand2) => {
    if (hand1.hInd == hand2.hInd) {
        return breakTies.get(hand1.hand)(hand1, hand2);
    }
    return hand1.hInd > hand2.hInd ? hand1 : hand2;
}