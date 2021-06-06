import {factorization} from "../../../reusable/primes.js";
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
const facts=[[],[]];
const distinctFacts=4;
const offsets = sequence(distinctFacts);
let found = false;
let i=2;
while (!found){
    facts[i]=factorization(i);
    if (offsets.every(x=>distinctFacts == facts[i-x].length)){
        found=true;
    }
    i++;
}

const result = facts.length-distinctFacts;
console.log("Solution: ",result);
