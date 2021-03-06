console.log("Pentagon numbers");
console.log(`Pentagonal numbers are generated by the formula, Pn=n(3nā1)/2. The first ten pentagonal numbers are:

1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

It can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference, 70 ā 22 = 48, is not pentagonal.

Find the pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal and D = |Pk ā Pj| is minimised; what is the value of D?`);
console.log("https://projecteuler.net/problem=44");

const pentagonalNumbers = [0, 1, 5, 12, 22, 35, 51, 70, 92, 117, 145];
const pentagonalNumbersSet = new Set(pentagonalNumbers);
let maxPent = pentagonalNumbers[pentagonalNumbers.length - 1];
let nextPentInd = pentagonalNumbers.length;

const isPent = (n) => {
    while (n > maxPent) {
        maxPent = nextPentInd * (3 * nextPentInd - 1) / 2;
        pentagonalNumbers.push(maxPent);
        pentagonalNumbersSet.add(maxPent);
        nextPentInd++;
    }
    return pentagonalNumbersSet.has(n);
}

let result = null;
for (let i = 1; i < pentagonalNumbers.length && result == null; i++) {
    for (let j = 1; j < i && result == null; j++) {
        if (isPent(pentagonalNumbers[i] + pentagonalNumbers[j]) && isPent(pentagonalNumbers[i] - pentagonalNumbers[j])) {
            console.log(pentagonalNumbers[i],pentagonalNumbers[j])
            result = Math.abs(pentagonalNumbers[i] - pentagonalNumbers[j]);
        }
    }

}

console.log("Solution: ", result);
