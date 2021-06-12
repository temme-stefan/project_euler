import {multiplySkalar, toNumberArray} from "../../../reusable/numberArrayArithmetics.js";
import {reduceSum} from "../../../reusable/myMath.js";

console.log("Powerful digit sum");
console.log(`A googol (10^100) is a massive number: one followed by one-hundred zeros; 100^100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.

Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum?`);
console.log("https://projecteuler.net/problem=56");
const start = performance.now();

const upper = 100;
let max =0;
for (let a = 2;a< upper;a++){
    let number = toNumberArray(a);
    for (let b=2;b<upper;b++){
        number = multiplySkalar(number,a);
        const s = reduceSum(number);
        max = Math.max(max,s);
    }
}

const result = max;
const end = performance.now();
console.log(`Solution (${((end - start) / 1000).toFixed(4)}s): `, result);
