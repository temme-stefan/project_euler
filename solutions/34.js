import {factorial, sequence, sumParams} from "../reusable/myMath.js";
import {toNumberArray} from "../reusable/numberArrayArithmetics.js";

console.log("Digit factorials");
console.log(`145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: As 1! = 1 and 2! = 2 are not sums they are not included.`);
console.log('https://projecteuler.net/problem=34\n');

const facts = sequence(10).map(n => factorial(n));
const curious = []
let n=10;
let max =Number.MAX_SAFE_INTEGER;
while (n<(Math.log10(n)+1)*facts[9] && n<max){
    if (toNumberArray(n).map(x=>facts[x]).reduce(...sumParams)==n){
        curious.push(n);
    }
    n++;
}
console.log(curious);

const result = curious.reduce(...sumParams);
console.log("Solution:", result);

