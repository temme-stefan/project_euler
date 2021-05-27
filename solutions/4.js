console.log('Largest palindrome product\n');
console.log(`A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.`);
console.log('https://projecteuler.net/problem=3\n');

const isPalindrom = n => {
    const s = "" + n;
    let isP = true;
    for (let i = 0; i < s.length / 2 && isP; i++) {
        isP = s[i] == s[s.length - 1 - i];
    }
    return isP;
}

const digits = 3;
let result;

let start = (Math.pow(10, digits) - 1);

outer: for (let i = start; i > Math.pow(10, digits - 1); i--) {
    for (let j = i; j > Math.pow(10, digits - 1); j--) {
        if (isPalindrom(i * j)) {
            result = i * j;
            console.log(i, j)
            break outer;
        }
    }
}

console.log("Solution:", result);