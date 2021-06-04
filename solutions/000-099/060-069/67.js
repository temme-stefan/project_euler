import {getMaxPathInTriangle} from "../../../reusable/dynamics.js";
import fs from 'fs';
import readline from 'readline';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("Maximum path sum II");
console.log(`By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom in triangle.txt (right click and 'Save Link/Target As...'), a 15K text file containing a triangle with one-hundred rows.

NOTE: This is a much more difficult version of Problem 18. It is not possible to try every route to solve this problem, as there are 2^99 altogether! If you could check one trillion (10^12) routes every second it would take over twenty billion years to check them all. There is an efficient algorithm to solve it. ;o)`);
console.log('https://projecteuler.net/problem=67\n');
const t = [];
const readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/p067_triangle.txt'),
    // output: process.stderr,
    console: false
});

readInterface.on('line',(line)=>{
    t.push(line.split(" ").map(s=>parseInt(s)));
});

readInterface.on('close',()=>{
    const result = getMaxPathInTriangle(t);
    console.log(`Solution: ${result}`);
});



