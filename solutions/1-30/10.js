import {eratosthenes} from "../../reusable/primes.js";

console.log('Summation of primes\n');
console.log(`The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.`);
console.log('https://projecteuler.net/problem=10\n');


const upper = 2e6;
const primes = eratosthenes(upper);
const result = primes.reduce((a,b)=>a+b,0);
console.log("Solution:", result);