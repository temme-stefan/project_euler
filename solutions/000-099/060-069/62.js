import {multiplySkalar, toNumberArray} from "../../../reusable/numberArrayArithmetics.js";
import {numberSort} from "../../../reusable/myMath.js";

console.log("Cubic permutations");
console.log(`The cube, 41063625 (3453), can be permuted to produce two other cubes: 56623104 (3843) and 66430125 (4053). In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.
Find the smallest cube for which exactly five permutations of its digits are cube.`);
console.log("https://projecteuler.net/problem=62");
const start = performance.now();

const searchedSize=5;

const map = new Map();

let i=1;
let firstFound=null;
let candidats = [];
while (firstFound==null){
    const iA = toNumberArray(i);
    const cube =multiplySkalar(multiplySkalar(iA,i),i);
    cube.sort(numberSort);
    const key = cube.join("");
    if (!map.has(key)){
        map.set(key,[]);
    }
    map.get(key).push(i);
    if (map.get(key).length==searchedSize){
        firstFound=map.get(key);
    }
    i++;
}

console.log(firstFound.map(i=>{
    const iA = toNumberArray(i);
    const cube =multiplySkalar(multiplySkalar(iA,i),i);
    const cText=cube.join('');
    cube.sort(numberSort);
    const key = cube.join("");
    return i+"³ : "+ cText+"    "+key;
}));

const result = multiplySkalar(multiplySkalar(toNumberArray(firstFound[0]),firstFound[0]),firstFound[0]).join("");
const end = performance.now();
console.log(`Solution (${((end - start) / 1000).toFixed(4)}s): `, result);
