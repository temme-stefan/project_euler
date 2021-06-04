import {numberSortDescending} from "../../../reusable/myMath.js";

console.log("Coin sums");
console.log(`In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?`);
console.log('https://projecteuler.net/problem=31\n');

const coins = [1, 2, 5, 10, 20, 50, 100, 200];
const target = 200;

coins.sort(numberSortDescending);

const count = (t, c) => {
    if (t == 0) {
        return 1;
    }
    if (c.length == 0) {
        return 0;
    }
    ;
    let n = 0;
    for (let i = Math.floor(t / c[0]); i >= 0; i--) {
        n += count(t - c[0] * i, c.slice(1));
    }
    return n;
}

const result = count(target, coins);
console.log("Solution:", result);

