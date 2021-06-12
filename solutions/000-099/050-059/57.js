import {Fraction} from "../../../reusable/fractions.js";

console.log("Square root convergents");
console.log(`see link`);
console.log("https://projecteuler.net/problem=57");
const start = performance.now();

const upper = 1000;

const steps = [new Fraction(0)];
for (let i=1;i<= upper;i++){
    steps.push( new Fraction(1).div(new Fraction(2).add(steps[i-1])));
}
const total = steps.map(x=>new Fraction(1).add(x));

const result = total.filter(({numerator,denominator})=>(""+numerator).length>(""+denominator).length).length;
const end = performance.now();
console.log(`Solution (${((end - start) / 1000).toFixed(4)}s): `, result);
