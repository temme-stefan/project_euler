import {eratosthenes} from "../../../reusable/primes.js";
import {toNumberArray} from "../../../reusable/numberArrayArithmetics.js";

console.log("Prime permutations");
console.log(`The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the three terms in this sequence?`);
console.log("https://projecteuler.net/problem=49");

const primes = eratosthenes(10000).filter(x => x >= 1000);
const primesSet=new Set(primes);
const setsOfThree = [];

for (let i = 0; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
        const delta = primes[j] - primes[i];
        if (primesSet.has(primes[j]+delta)){
            setsOfThree.push(new Set([primes[i],primes[j],primes[j]+delta]));
        }
    }
}


const possibles = setsOfThree.filter(s => {
    const numberArrays = [...s].map(n => toNumberArray(n));
    return numberArrays[0].every(digit => numberArrays[1].includes(digit))
        && numberArrays[1].every(digit => numberArrays[2].includes(digit))
        && numberArrays[2].every(digit => numberArrays[0].includes(digit))
});

console.log(possibles);


const result = [...possibles.find(s=>!s.has(1487))].join("");
console.log("Solution: ", result);
