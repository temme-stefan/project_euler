import {binomialCoefficient} from "../../../reusable/myMath.js";

console.log("Combinatoric selections");
console.log(`see link`);
console.log("https://projecteuler.net/problem=53");
const start = performance.now();

const maxN = 100;
const countIf = 1e6;

let entriesAbove = 0;

for (let n=1;n<=maxN;n++){
    for (let k=0;k<=Math.floor(n/2);k++){ // (n k) == (n n-k)
        const bino = binomialCoefficient(n,k);
        if (bino>countIf){
            entriesAbove+= (n+1) - 2*k; // elements in row of pascal triangle - elements above
            break;
        }
    }
}


const result = entriesAbove;
const end = performance.now();
console.log(`Solution (${((end - start) / 1000).toFixed(4)}s): `, result);
