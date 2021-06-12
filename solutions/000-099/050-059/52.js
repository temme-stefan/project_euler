import {toNumberArray} from "../../../reusable/numberArrayArithmetics.js";
import {sequence} from "../../../reusable/myMath.js";

console.log("Permuted multiples");
console.log(`It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.
Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.`);
console.log("https://projecteuler.net/problem=52");
const start = performance.now();

const maxMultiplier=6;

const multiplier = sequence(maxMultiplier-1,2);

const toSortedDigits = a=>{
    const aA = toNumberArray(a);
    aA.sort();
    return aA;
}

const equalDigits = (a,b)=>{
    return a.every((n,i)=>n==b[i]);
}
let i=2;
let result = null;
while (result == null){
    const iA = toSortedDigits(i);
    const products= multiplier.map(factor=>toSortedDigits(i*factor));
    if (products.every(pA=> equalDigits(iA,pA))){
        console.log(i,...multiplier.map(f=>f*i));
        result = i;
    }
    i++;
}


const end = performance.now();
console.log(`Solution (${((end - start) / 1000).toFixed(4)}s): `, result);
