import {sumParams} from "../../../reusable/myMath.js";
import {toNumberArray} from "../../../reusable/numberArrayArithmetics.js";

console.log("Double-base palindromes");
console.log(`The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)`);
console.log('https://projecteuler.net/problem=36\n');

const upper = 1e6;
const doublePalindroms = []
const isPalindrom = (a) => {
    let is = true;
    for (let i = 0; is && i < a.length / 2; i++) {
        is = a[i] == a[a.length - 1 - i];
    }
    return is;
}

for (let i = 1; i < upper; i++) {
    const binary = i.toString(2);
    if (isPalindrom(toNumberArray(i)) && isPalindrom(binary)) {
        doublePalindroms.push({
            decimal: i,
            binary
        });
    }
}

console.log(doublePalindroms);
const result = doublePalindroms.map(x => x.decimal).reduce(...sumParams);
console.log("Solution:", result);

