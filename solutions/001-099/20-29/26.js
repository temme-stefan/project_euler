console.log("Reciprocal cycles");
console.log(`A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2\t= \t0.5
1/3\t= \t0.(3)
1/4\t= \t0.25
1/5\t= \t0.2
1/6\t= \t0.1(6)
1/7\t= \t0.(142857)
1/8\t= \t0.125
1/9\t= \t0.(1)
1/10\t= \t0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.`);
console.log('https://projecteuler.net/problem=26\n');

const getCycleLength = (n)=>{
    let representation = "0.";
    let length = 0;
    const rest = new Map();
    let ind =0;
    let curRest=1;
    while(!rest.has(curRest) && curRest!=0){
        rest.set(curRest,ind);
        const step = Math.floor(curRest*10/n);
        representation = representation + step;
        curRest = curRest*10 - (step*n);
        ind++;
    }
    if (curRest!=0) {
        length = ind - rest.get(curRest);
        representation = representation.split('');
        representation.splice(2 + rest.get(curRest), 0, '(');
        representation = representation.join('') + ')';
    }
    return {
        representation,
        length
    }
}

const d = 1000;
let max= {length:0};
let maxInd=0;
for (let i=2;i<d;i++){
    const cycle=getCycleLength(i);
    // console.log(`1/${i} = ${cycle.representation}  ${cycle.length}`);
    if (cycle.length>max.length){
        max=cycle;
        maxInd=i;
    }
}

const result = maxInd;
console.log("Solution:",result,max);

