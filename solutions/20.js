import {multiplySkalar, toNumberArray} from "../reusable/numberArrayArithmetics.js";

console.log("Factorial digit sum");
console.log(`n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!`);
console.log('https://projecteuler.net/problem=20\n');

let cur=toNumberArray(1);
let upper = 100;
for (let i=2; i<=upper;i++){
    cur=multiplySkalar(cur,i);
}


const result = cur.reduce((a,b)=>a+b,0);
console.log(`Solution: ${result}`);

let cur2=BigInt(1);
for (let i=BigInt(2);i<=upper;i++){
    cur2*=i;
}
let sum=BigInt(0);
while (cur2>0){
    sum+=cur2% BigInt(10);
    cur2 /= BigInt(10);
}
console.log("Solution using BigInt:", sum);