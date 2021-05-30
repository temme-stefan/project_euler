import {addMany} from "../reusable/numberArrayArithmetics.js";

console.log('Power digit sum\n');
console.log(`2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?`);
console.log('https://projecteuler.net/problem=16\n');


const pow = 1000;
let cur = [2];
for (let i=0; i<pow-1;i++){
    cur = addMany(cur,cur);
}

const result = cur.reduce((a, b) => a + b, 0);

console.log("Solution:", result);