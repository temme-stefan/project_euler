import {eratosthenes} from "../reusable/primes.js";


console.log('10001st prime\n');
console.log(`By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?`);
console.log('https://projecteuler.net/problem=7\n');

const n=10001;
let step=4;
let primes = [];
while (primes.length<n){
    primes=eratosthenes(Math.pow(10,step));
    step++;
}

const result=primes[n-1];

console.log("Solution:", result);