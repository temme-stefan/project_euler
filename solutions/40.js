import {sequence} from "../reusable/myMath.js";
import {toNumberArray} from "../reusable/numberArrayArithmetics.js";

console.log("Champernowne's constant");
console.log(`An irrational decimal fraction is created by concatenating the positive integers:

0.12345678910 1 112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If d_n represents the nth digit of the fractional part, find the value of the following expression.

d(1) * d(10) * d(100) * d(1000) * d(10000) * d(100000) * d(1000000)`);
console.log('https://projecteuler.net/problem=40\n');


/**
 * Thoughts:
 * 1,...,9: 9 x 1 digit : n<=9
 * 10,...99: 90 x 2 digits : n>9 && n<= 9+180 = 189
 * 100,...,999:900 x 3 digits : n>189 && n<= 189 + 2700 = 2889
 *
 * ... : 9* 10^(k-1) x k digits: n>step(k-1) && n<step(k)
 *
 * step(0)=0
  * step(k)= step(k-1) + 9* 10^(k-1)*k
 */

const max_d= 1000000;
const steps =[0];
while (steps[steps.length-1]<max_d){
    steps[steps.length] = steps[steps.length-1]+9*Math.pow(10,steps.length-1)*steps.length;
}
const d = (n)=>{
    const upperInd=steps.findIndex(s=>s>n);
    const lowerInd = upperInd-1;
    const inLength=n-steps[lowerInd]-1;
    const s= sequence(Math.pow(10,lowerInd)*9,Math.pow(10,lowerInd));
    const targetNumber = s[Math.floor(inLength/upperInd)];
    const offset=inLength%upperInd;
//    console.log(`${n}: targetNumber: ${targetNumber},offset:${offset}`)
    return toNumberArray(targetNumber)[offset];
}

const result = d(1) * d(10) * d(100) * d(1000) * d(10000) * d(100000) * d(1000000);

console.log("Solution:",result);