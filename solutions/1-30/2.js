console.log('Even Fibonacci numbers\n');
console.log(`Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued`);
console.log('https://projecteuler.net/problem=2\n');

/**
 * Thoughts:
 * slightly different definition:
 * 0,1,1,2,3,5,...
 *
 * fib(3n) is even for all n= 0, 1,...
 *  n=0: fib(0) = 0 is even
 *  n=> n+1 : fib(3(n+1)+2)
 *       = fib(3(n+1)) + fib(3(n+1)+1)
 *       = fib(3n+2 +1) + fib(3n+2 +2)
 *       = fib(3n+2) + fib(3n+1) + fib(3n+3) + fib(3n+2)
 *       = 2* fib(3n+2) + fib(3n+1) + fib(3n+2) + fib(3n+1)
 *       = 3* fib(3n+2) + 2 * fib(3n+1) (3* even (IV) + 2 * (odd or even) = odd + odd = odd)
 * q.e.d.
 *
 * fib(n) = 1/sqrt(5)*((2/(-1+sqrt(5)))^n-(2/(-1-sqrt(5)))^n)
 *
 *
 */

const upper = 4e6;
let sum = 0;
const sqrt5 = Math.sqrt(5);
let fib = 0;
for (let ind = 0;fib<upper;ind+=3){
   sum += fib;
   fib = Math.round(1/sqrt5*( Math.pow(2/(-1+sqrt5),ind)-Math.pow(2/(-1-sqrt5),ind)));
}


console.log("Solution:", sum );