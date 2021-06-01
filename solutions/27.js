import {eratosthenes} from "../reusable/primes.js";

console.log("Quadratic primes");
console.log(`to much formulars, see link`);
console.log('https://projecteuler.net/problem=27\n');

/**
 * Observations:
 * n² +an +b is prime
 *  & n = 0 => b is prime ==> b>0
 *  & n = 1 => a+ b+1 is prime
 */

let maxPrimes = 1000;
let primes = eratosthenes(maxPrimes);

const isPrime = (n, a, b) => {
    let v = n * n + a * n + b;

    if (v > maxPrimes) {
        maxPrimes = Math.pow(10,("" + v).length + 1);
        primes = eratosthenes(maxPrimes);
    }
    return primes.includes(v);
}

let max = 0, ab = [0, 0];

const possis = Array.from(primes);
for (let b = 0; b < possis.length; b++) {
    for (let a = 0; a < 1000; a++) {
        let plusCheck = true, minusCheck = true;
        let plusLength = 0, minusLength = 0;
        for (let n = 0; plusCheck || minusCheck; n++) {
            if (isPrime(n, a, possis[b])) {
                plusLength++
            } else {
                plusCheck = false;
            }
            if (isPrime(n, -a, possis[b])) {
                minusLength++
            } else {
                minusCheck = false;
            }
        }
        if (plusLength > max) {
            max = plusLength;
            ab = [a, possis[b]];
        }
        if (minusLength > max) {
            max = minusLength;
            ab = [-a, possis[b]];
        }
    }
}


const result = ab[0] * ab[1];
console.log("Solution:", result, ab, max);

