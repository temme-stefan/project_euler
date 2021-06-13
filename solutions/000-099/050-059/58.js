import {sequence} from "../../../reusable/myMath.js";
import {isPrime} from "../../../reusable/primes.js";

console.log("Spiral primes");
console.log(`Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.

37 36 35 34 33 32 31
38 17 16 15 14 13 30
39 18  5  4  3 12 29
40 19  6  1  2 11 28
41 20  7  8  9 10 27
42 21 22 23 24 25 26
43 44 45 46 47 48 49

It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 ≈ 62%.

If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. If this process is continued, what is the side length of the square spiral for which the ratio of primes along both diagonals first falls below 10%?`);
console.log("https://projecteuler.net/problem=58");
const start = performance.now();

let cornerPrimes = 0;
let cornerNoPrimes = 1;
let result = null;
for (let i = 3; result == null; i += 2) {
    const corners = sequence(3, i * i - 3 * (i - 1), i - 1);
    const cPrimes = corners.filter(n => isPrime(n)).length;
    cornerPrimes += cPrimes;
    cornerNoPrimes += 4 - cPrimes;
    console.log(i, cornerPrimes, cornerPrimes + cornerNoPrimes, cornerPrimes / (cornerNoPrimes + cornerPrimes));
    if (0.12 > cornerPrimes / (cornerNoPrimes + cornerPrimes)) {
        result = i;
    }
}


const end = performance.now();
console.log(`Solution (${((end - start) / 1000).toFixed(4)}s): `, result);
