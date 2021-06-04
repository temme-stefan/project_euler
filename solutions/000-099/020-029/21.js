import {getDividers} from "../../../reusable/primes.js";

console.log("Amicable numbers");
console.log(`Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.`);
console.log('https://projecteuler.net/problem=21\n');

const upper = 10000;
const d = Array.from({length:upper});
const amicalePairs=[];

const getD = (n)=>{
    if (d[n]==null){
        d[n]=getDividers(n).reduce((a,b)=>a+b,0)-n;
    }
    return d[n];
}

for (let i = 1;i<upper;i++){
    const j = getD(i);
    if (i!=j && getD(j)==i){
        amicalePairs.push([i,j]);
    }
}

console.log(amicalePairs);

const result = amicalePairs.flat().reduce((a,b)=>a+b,0)/2;

console.log("Solution:", result);