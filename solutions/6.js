
console.log('Sum square difference\n');
console.log(`The sum of the squares of the first ten natural numbers is,

    1²+2²+...+10² = 385

The square of the sum of the first ten natural numbers is,

    (1+2+...+10)² = 55² = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is,

    3025-385 = 2640

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.`);
console.log('https://projecteuler.net/problem=6\n');

const upper=100;

const sumSquared = Math.pow(upper*(upper+1)/2,2);

const squaredSum = upper*(upper+1)*(2*upper+1)/6

let result = Math.abs(sumSquared-squaredSum);

console.log("Solution:", result);