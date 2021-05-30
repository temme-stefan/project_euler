import {toNumberArray} from "../reusable/numberArrayArithmetics.js";

console.log("Number letter counts");
console.log(`If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.`);
console.log('https://projecteuler.net/problem=17\n');

const firstdigit = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fiveteen", "sixteen", "seventeen", "eightteen", "nineteen"]
const seconddigit = [, , "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"]

const getHundred = (n)=>{
    if (n<20){
        return firstdigit[n];
    }
    else{
        const x = toNumberArray(n);
        let s="";
        if (x.length==3){
            s = firstdigit[x[0]]+" hundred"+(n%100>0?" and":"");
            x.shift();
        }
        if (x.length==2){
            if (x[0]*10+x[1]<20){
                s = s + firstdigit[x[0]*10+x[1]];
            }
            else{

            }
            s = firstdigit[x[0]]+" hundred"+(n%100>0?" and":"");
            x.shift();
        }
        if (x.length==2 && x[0]*10+x[1]<20 || x.length==1){
            s = s + firstdigit[x[0]*10+x[1]];
        }
        else {

            s = s + (seconddigit[x[0]] ?? "");
            if (x[1] > 0)
                s = s + firstdigit[x[1]];
        }
        return s;
    }


    if (x.length>2){
        s = firstdigit[x[2]]+" hundred and ";
    }
    if (x[1]<3){
        s = s + firstdigit[x[1]*10+x[0]];
    }
    else{
    }
    return s;
}

const to = 125;

for (let i = 90; i <= to; i++) {
    let current = i;
    let s = "";
    while (current > 0) {
        const step = current % 1000;
        s= s + getHundred(step);
        current = Math.floor(step / 1000);
    }
    console.log(i,s);
}


const result = null;
console.log(`Solution: ${result}`);