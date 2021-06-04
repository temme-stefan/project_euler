
console.log("Integer right triangles");
console.log(`If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?`);
console.log('https://projecteuler.net/problem=39\n');

const solutions=new Map();

const max_p=1000
for (let p = 3;p<=max_p;p++) {
    const subSolutions = [];

    const check = (a, b, c) => a * a + b * b - c * c == 0;
    for (let a = 1; a <= p / 2; a++) {
        for (let b = Math.max(a, Math.ceil(p / 2 - a)); b <= p / 2; b++) {
            const c = p - a - b;
            if (check(a, b, c)) {
                subSolutions.push([a, b, c]);
            }
        }
    }
    if (subSolutions.length>0){
        solutions.set(p,subSolutions);
    }
}
const max = [...solutions].reduce((a,b)=>a[1].length<b[1].length?b:a);

const result = max[0];

console.log("Solution:",result);