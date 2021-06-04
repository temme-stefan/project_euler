import {toNumber, toNumberArray} from "../reusable/numberArrayArithmetics.js";
import {eratosthenes} from "../reusable/primes.js";

console.log("Circular primes");
console.log(`The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?`);
console.log('https://projecteuler.net/problem=35\n');

const upper = 1e6;
const primes = new Map(eratosthenes(upper).map(x=>[x,x]));
const visited = new Set();
const circularPrimes=[]

primes.forEach(p=>{
    if (!visited.has(p)){
        visited.add(p);
        const pn = toNumberArray(p);
        let allPrimes= true;
        const all=new Set();
        all.add(p);
        for (let i=1; i<pn.length;i++){
            const step = toNumber(pn.slice(i).concat(pn.slice(0,i)));
            visited.add(step);
            if (primes.has(step)){
                all.add(step);
            }
            else{
                allPrimes = false;
            }
        }
        if (allPrimes){
            circularPrimes.push([...all]);
        }
    }
})


console.log(circularPrimes);

const result = circularPrimes.flat().length;
console.log("Solution:", result);

