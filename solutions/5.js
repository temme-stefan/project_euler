import {factorization} from "../reusable/primes.js";

console.log('Smallest multiple\n');
console.log(`2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?`);
console.log('https://projecteuler.net/problem=5\n');

const upper=20;
const facts = new Set()

const arr=Array.from({length:upper},(_,i)=>i+1)
    .map(x=>factorization(x));

const red = arr.reduce((a,b)=>{
    b.forEach(([factor,amount])=>{
        if (!a.hasOwnProperty(factor)){
            a[factor]={
                factor,
                amount
            };
        }
        else {
            a[factor].amount = Math.max(a[factor].amount, amount);
        }
    });
    return a;
},{})

let result = 1;

Object.values(red).forEach(({factor,amount})=>{
    result *= Math.pow(factor,amount);
})


console.log("Solution:", result);