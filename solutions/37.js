import {sequence, sumParams} from "../reusable/myMath.js";
import {eratosthenes} from "../reusable/primes.js";

console.log("Truncatable primes");
console.log(`The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.`);
console.log('https://projecteuler.net/problem=37\n');

const truncatablePrimes = [];
const leftTruncPrimes = [,[2,3,5,7]];
const rightTruncPrimes = [,[2,3,5,7]];

let currentPower = 3;
let primes=new Map();

const morePrimes = ()=>{
    currentPower++;
    console.log(`calculate Primes below ${Math.pow(10,currentPower)}`);
    primes= new Map(eratosthenes(Math.pow(10,currentPower)).map(x=>[x,x]));
}
morePrimes();
let length = 2;
const upper = 11;
const digits=sequence(9,1);
while (truncatablePrimes.length<upper){
    if (length>currentPower){
        morePrimes();
    }
    leftTruncPrimes[length] = leftTruncPrimes[length-1]
        .map((x,i)=>digits.map(y=>parseInt(""+y+x))).flat()
        .filter(n=>primes.has(n));
    rightTruncPrimes[length] = rightTruncPrimes[length-1]
        .map((x,i)=>digits.map(y=>parseInt(""+x+y))).flat()
        .filter(n=>primes.has(n));

    truncatablePrimes.push(...leftTruncPrimes[length].filter(x=>rightTruncPrimes[length].includes(x)));
    length++;
}
console.log(truncatablePrimes);

const result = truncatablePrimes.filter((x,i)=>i<upper).reduce(...sumParams);
console.log("Solution:", result);

