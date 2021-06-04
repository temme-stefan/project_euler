import {addMany, toNumberArray} from "../../../reusable/numberArrayArithmetics.js";

console.log("1000-digit Fibonacci number");
console.log(`The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?`);
console.log('https://projecteuler.net/problem=24\n');

const digits=1000;
let f_1=toNumberArray(1);
let f_2=toNumberArray(1);
let cur=[];
let ind = 2;

while (cur.length<digits){
    ind++;
    cur=addMany(f_2,f_1);
    f_1=f_2;
    f_2=cur;
}


const result = ind;
console.log("Solution:",result);

