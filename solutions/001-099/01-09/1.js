console.log('Multiples of 3 and 5\n');
console.log(`If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.`);
console.log('https://projecteuler.net/problem=1\n');

const upper = 1000;
const bases=[3,5];
const min = bases.reduce((a,b)=>Math.min(a,b),Number.MAX_SAFE_INTEGER);
let current = min;
let sum = 0;
while(current<upper){
   const steps= bases.map(x=>current%x);
   if (steps.some(x=>x==0)){
      sum+=current;
   }
   current+=steps.map((x,i)=>bases[i]-x).reduce((a,c)=>c==0?a:Math.min(a,c),min);
}

console.log("Solution:", sum );