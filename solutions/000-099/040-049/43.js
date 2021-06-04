import {sequence, sumParams} from "../../../reusable/myMath.js";
import {addMany, toNumber} from "../../../reusable/numberArrayArithmetics.js";

console.log("Sub-string divisibility");
console.log(`The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d_1 be the 1st digit, d_2 be the 2nd digit, and so on. In this way, we note the following:

d_2 d_3 d_4=406 is divisible by 2
d_3 d_4 d_5=063 is divisible by 3
d_4 d_5 d_6=635 is divisible by 5
d_5 d_6 d_7=357 is divisible by 7
d_6 d_7 d_8=572 is divisible by 11
d_7 d_8 d_9=728 is divisible by 13
d_8 d_9 d_10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.`);
console.log("https://projecteuler.net/problem=43");

const interestingNumbers = [];

const check = [,,,,2,3,5,7,11,13,17];

const digits = sequence(10);

const step = (current,others)=>{
    if (others.length==0){
        interestingNumbers.push(toNumber(current));
    }
    others.map((x,i)=>{
        const cur = current.slice(0).concat([x]);
        const oth = others.slice(0,i).concat(others.slice(i+1));
        return {
            cur,
            oth
        }
    }).filter(({cur,oth})=>check[cur.length]== null || (cur[cur.length-3]*100 + cur[cur.length-2]*10 + cur[cur.length-1])%check[cur.length]==0)
        .forEach(({cur,oth})=>step(cur,oth));
}

step([],digits);
console.log(interestingNumbers);

const result = interestingNumbers.reduce(...sumParams);
console.log("Solution: ", result);
