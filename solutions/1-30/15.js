import {binomialCoefficient} from "../../reusable/myMath.js";

console.log('Lattice paths\n');
console.log(`Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20×20 grid?`);
console.log('https://projecteuler.net/problem=15\n');


/**
 * 40 Steps 20 Decisions
 *
 * ( 40 )
 * (    )
 * ( 20 )
 *
 */



console.log("Solution:", binomialCoefficient(40,20) );