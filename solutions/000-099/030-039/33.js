import {ggT, sequence} from "../../../reusable/myMath.js";
import {toNumber, toNumberArray} from "../../../reusable/numberArrayArithmetics.js";

console.log("Digit cancelling fractions");
console.log(`The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.`);
console.log('https://projecteuler.net/problem=33\n');

const numbers = sequence(100).filter(n => n > 10 && n % 10 != 0);

const fractions = numbers.map(x => numbers.filter(y => y > x).map(y => [toNumberArray(x), toNumberArray(y), x / y])).flat()
    .filter(([a, b, fraction]) =>
        a[0] == b[0] && fraction == a[1] / b[1]
        || a[1] == b[0] && fraction == a[0] / b[1]
        || a[0] == b[1] && fraction == a[1] / b[0]
        || a[1] == b[1] && fraction == a[0] / b[0]
    )
    .map(([a, b]) => [toNumber(a), toNumber(b)])
;
console.log(fractions);

const combined = fractions.reduce(([a, b], [c, d]) => [a * c, b * d], [1, 1]);
const ggt = ggT(...combined);


const result = combined[1] / ggt;
console.log("Solution:", result);

