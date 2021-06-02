import {toNumber, toNumberArray} from "../reusable/numberArrayArithmetics.js";
import {numberSort} from "../reusable/myMath.js";

console.log("Digit fifth powers");
console.log(`Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 1^4 + 6^4 + 3^4 + 4^4
8208 = 8^4 + 2^4 + 0^4 + 8^4
9474 = 9^4 + 4^4 + 7^4 + 4^4
As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.`);
console.log('https://projecteuler.net/problem=30\n');

const power = 5;
const numbers = []
const maxNumber = power * Math.pow(9, power);

const lookup = new Map();

const digitPowerSum = (n) => {
    let s = toNumberArray(n);
    s.sort(numberSort);
    let key = toNumber(s);
    if (!lookup.has(key)) {
        if (n < 10) {
            lookup.set(key, Math.pow(n, power));
        } else {
            const firstHalf = toNumber(s.filter((x, i) => i < s.length / 2));
            const secondHalf = toNumber(s.filter((x, i) => i >= s.length / 2));
            lookup.set(key, digitPowerSum(firstHalf) + digitPowerSum(secondHalf))
        }
    }
    return lookup.get(key);
}


const isDigitPower = (n) => {
    return digitPowerSum(n) == n;
};

for (let i = 2; i < maxNumber; i++) {
    if (isDigitPower(i)) {
        numbers.push(i);
    }
}


const result = numbers.reduce((a, b) => a + b, 0);
console.log("Solution:", result, numbers);

