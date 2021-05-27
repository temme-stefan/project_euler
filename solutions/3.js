import {factorization} from "../reusable/primes.js";

console.log('Largest prime factor\n');
console.log(`The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?`);
console.log('https://projecteuler.net/problem=3\n');


const upper = 600851475143;
const facts = factorization(upper);
const result = facts[facts.length - 1][0];
console.log("Solution:", result);