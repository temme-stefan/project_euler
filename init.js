import fs from 'fs';
import readline from 'readline';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


let {2: problemNumber} = process.argv;
problemNumber = parseInt(problemNumber);

if (problemNumber == null || !Number.isFinite(problemNumber)) {
    error("no valid problemNumber given");
}
const h = Math.floor(problemNumber / 100);
const t = Math.floor(problemNumber % 100 / 10);

const path = `solutions/${h}00-${h}99/${h}${t}0-${h}${t}9/${problemNumber}.js`
const file = __dirname + "/" + path;
const dir = dirname(file);

if (fs.existsSync(file)) {
    error("File already exists: " + path);
}
if (!fs.existsSync(dir) ){
   fs.mkdirSync(dir,{recursive:true});
}

const stream = fs.createWriteStream(file);
stream.write(
    `console.log("Title");
console.log(\`Description\`);
console.log("https://projecteuler.net/problem=${problemNumber}");
const start = performance.now();



const result = null;
const end = performance.now();
console.log(\`Solution (\${((end - start) / 1000).toFixed(4)}s): \`, result);
`
);
stream.end();

console.log(`${path} created
to run type:
node ${path}
`);


function error(text) {
    throw new Error(text)
}