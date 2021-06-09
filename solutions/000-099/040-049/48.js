import {addMany, multiply, multiplySkalar, toNumberArray} from "../../../reusable/numberArrayArithmetics.js";

console.log("Self powers");
console.log(`The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.`);
console.log("https://projecteuler.net/problem=48");

let sum = [0];
const max = 1000;
const cut = (x, k,arr) => arr.length-11<k;
let bSum=0
for (let i = 1; i <= max; i++) {
    let p = [1];
    for (let j = 0; j < i; j++) {
        p = multiplySkalar(p, i).filter(cut);
    }
    sum = addMany(sum, p).filter(cut);
    bSum += Math.pow(i,i);
}

const result = sum.join("");
console.log("Solution: ", result);
