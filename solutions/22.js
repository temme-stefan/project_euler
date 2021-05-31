import fs from 'fs';
import readline from 'readline';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("Names scores");
console.log(`Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?`);
console.log('https://projecteuler.net/problem=22\n');

const data = fs.readFileSync(__dirname+"/../ressources/p022_names.txt",'utf8').split(',').map(x=>x.substr(1,x.length-2));
data.sort();
// data[937] == COLIN => orderscore= index+1
const getWordScore = (s)=>s.split('').map(c=>c.charCodeAt()-"A".charCodeAt()+1).reduce((a,b)=>a+b,0);

const result = data.map((x,i)=>(i+1)*getWordScore(x)).reduce((a,b)=>a+b,0);

console.log("Solution:",result);

