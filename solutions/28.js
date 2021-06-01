
console.log("Number spiral diagonals");
console.log(`Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?`);
console.log('https://projecteuler.net/problem=28\n');

const size = 1001;

const step = (n)=>n==1?1:step(n-2)+4*n*n-6*n+6;

const result = step(size);
console.log("Solution:", result);

