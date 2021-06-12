import {isPalindrom} from "../../../reusable/strings.js";

console.log('Largest palindrome product\n');
console.log(`A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.`);
console.log('https://projecteuler.net/problem=4\n');



const digits = 3;
let result = 0;

let start = (Math.pow(10, digits) - 1);
let end = Math.pow(10, digits - 1);
for (let i = start; i >= end; i--) {
    for (let j = i; j >= end; j--) {
        const p= i*j;
        if (isPalindrom(p)) {
            result = Math.max(p,result);
            break
        }
        if (p<result){
            break;
        }
    }
    if (i*i<result){
        break;
    }
}

console.log("Solution:", result);