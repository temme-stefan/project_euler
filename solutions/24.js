console.log("Lexicographic permutations");
console.log(`A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?`);
console.log('https://projecteuler.net/problem=24\n');

const digits=10;
const nth=1e6;
const max = Array.from({length:digits},(_,i)=>i+1).reduce((a,b)=>a*b,1);

const start = Array.from({length:digits},(_,i)=>i);

const step = (n,arr,poss)=>{
    if (arr.length==1 || n== 0){
        return arr.join('');
    }
    const possPerDigit = poss/arr.length;
    const cur= arr[Math.floor(n/(possPerDigit))];
    const next = arr.filter(x=>x!=cur);
    return `${cur}${step(n%possPerDigit,next,possPerDigit)}`;
}

// for (let i=0;i<2*3*4;i++){
//     console.log(i,step(i,start,max));
// }


const result = step(nth-1,start,max);
console.log("Solution:",result);

