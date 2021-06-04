import {sequence} from "../../../reusable/myMath.js";
import {eratosthenes} from "../../../reusable/primes.js";
import {toNumberArray} from "../../../reusable/numberArrayArithmetics.js";

console.log("Pandigital prime");
console.log(`We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?`);
console.log("https://projecteuler.net/problem=41");

/**
 * length of pandigital Primenumber must be 4 or 7 (other digit sums or divided by 3 and thus not prime)
 */

const d4 = sequence(4, 1);
const d7 = sequence(7, 1);
const pandigitalPrimes = eratosthenes(1e7).filter(x=> {
    const length = Math.floor(Math.log10(x))+1;
    const n = toNumberArray(x);
    return length == 4 && d4.every(d=>n.includes(d)) || length==7 && d7.every(d=>n.includes(d));
});

console.log(pandigitalPrimes);


const result = pandigitalPrimes[pandigitalPrimes.length-1];
console.log("Solution: ", result);
