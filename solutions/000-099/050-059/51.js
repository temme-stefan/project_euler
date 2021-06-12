import {eratosthenes} from "../../../reusable/primes.js";
import {sequence} from "../../../reusable/myMath.js";
import {toNumber, toNumberArray} from "../../../reusable/numberArrayArithmetics.js";


console.log("Prime digit replacements");
console.log(`By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.`);
console.log("https://projecteuler.net/problem=51");
const start = performance.now();

const familySize = 8;
const maxP = 1e6;

const primes = eratosthenes(maxP);
const primeSet = new Set(primes);

const digits = sequence(10);

const replacenentInd = new Map();
const getReplacementIndixes = (length) => {
    if (!replacenentInd.has(length)) {
        replacenentInd.set(length, sequence(Math.pow(2, length) - 2, 1)
            .map(n => [... n.toString(2)].reverse().reduce((a, c, i) => {
                if (c == "1") {
                    a.add(i);
                }
                return a;
            }, new Set()))
        );
    }
    return replacenentInd.get(length);
};

let i = 0;
let checked = new Set();
let result = null;
while (i < primes.length && result == null) {
    const p = primes[i];
    i++;
    if (checked.has(p)) {
        continue;
    }
    checked.add(p);
    const pA = toNumberArray(p);
    const lower = Math.pow(10,pA.length-1);
    const repInd = getReplacementIndixes(pA.length);
    for (let j=0; j< repInd.length;j++){
        const r = repInd[j];
        const pInRep = digits.map(d=>toNumber(pA.map((n,k)=>r.has(k)?d:n))).filter(x=>lower<x && primeSet.has(x));
        pInRep.forEach(v=>checked.add(v));
        if (pInRep.length>=familySize){
            console.log(pInRep,r);
            result = pInRep[0];
            break;
        }
    }
}


const end = performance.now();
console.log(`Solution (${((end - start) / 1000).toFixed(4)}s): `, result);
