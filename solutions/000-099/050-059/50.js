import {eratosthenes} from "../../../reusable/primes.js";
import {sumParams} from "../../../reusable/myMath.js";

console.log("Consecutive prime sum");
console.log(`The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?`);
console.log("https://projecteuler.net/problem=50");


const max = 1e6;
const memSplitter=100
const primes = eratosthenes(max);
const primeSet = new Set(primes);

let maxLength=0;
let primeWithMaxLength = 0;
let sums = [];
primes.forEach(p=>{
    sums = sums.map(s=>s+p);
    sums.push(p);
    let pInd = sums.findIndex(s=>s<max && primeSet.has(s));
    let length = sums.length-pInd;
    if (length>maxLength){
        maxLength=length;
        primeWithMaxLength = sums[pInd];
    }
});
console.log(maxLength,primeWithMaxLength);




// console.log(sums);

const result = primeWithMaxLength;
console.log("Solution: ", result);
