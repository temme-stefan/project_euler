import {eratosthenes, factorization, factorizationWithMemory} from "../../../reusable/primes.js";
import {sequence} from "../../../reusable/myMath.js";

console.log("Distinct primes factors");
console.log(`The first two consecutive numbers to have two distinct prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?`);
console.log("https://projecteuler.net/problem=47");
const distinctFacts=4;
const offsets = sequence(distinctFacts);
const starts= sequence(distinctFacts,-3)
let found = 0;
let i=2;
let step = 3;
let max = 0;
let primes = [];
const updatePrimes = ()=> {
    step++;
    max = Math.pow(10, step);
    primes = eratosthenes(max);
}
while (found == 0){
    if (i>max){
        updatePrimes();
    }
    const facts=factorizationWithMemory(i,primes);
    if (facts.length == distinctFacts){
            const startIndex = starts.findIndex(j=>offsets.every(k=>factorizationWithMemory(i+j+k,primes).length==distinctFacts));
            if (startIndex>=0){
                found=i+starts[startIndex];
            }
    }

    i+=distinctFacts;
}

const result = found;
console.log("Solution: ",result);
