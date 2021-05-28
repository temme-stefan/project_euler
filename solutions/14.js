console.log('Longest Collatz sequence\n');
console.log(`The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.`);
console.log('https://projecteuler.net/problem=14\n');

const stepMap=new Map();
stepMap.set(1,0);

const step = (n)=>{
    if (n%2==0){
        return n/2;
    }
    else{
        return 3*n+1;
    }
}

const getStepLength = (n)=>{
    if (!stepMap.has(n)){
        stepMap.set(n,1+getStepLength(step(n)));
    }
    return stepMap.get(n);
}



const upper = 1e6;
let max = 0;
let maxInd=null;

for (let i=1;i<=upper;i++){
    const l = getStepLength(i);
    if (l>max){
        max=l;
        maxInd=i;
    }
}


console.log("Solution:", maxInd,max);