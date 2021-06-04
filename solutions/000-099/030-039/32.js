import {sequence, sumParams} from "../../../reusable/myMath.js";

console.log("Pandigital products");
console.log(`We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.`);
console.log('https://projecteuler.net/problem=32\n');

const lookup = new Map();

/**
 *
 * @param length {number}
 * @param digits: {number[]}
 * @returns {{value:number, others:number[]}[]}
 */
const getNumbersWithLength = (length, digits) => {
    if (length > digits.length) {
        throw `length (${length}) should be less or equal to digits.length (${digits.length})`;
    }
    let key = `${length}-${digits.join('')}`;
    if (!lookup.has(key)) {
        if (length == 1) {
            lookup.set(key, digits.map((d, i) => {
                return {
                    value: d,
                    others: digits.slice(0, i).concat(digits.slice(i + 1))
                };
            }));
        } else {
            lookup.set(key, digits.map((d, i) => {
                const rest = digits.slice(0, i).concat(digits.slice(i + 1));
                const add = Math.pow(10, length - 1) * d;
                return getNumbersWithLength(length - 1, rest).map(o => {
                    return {
                        value: add + o.value,
                        others: o.others
                    }
                });
            }).flat());
        }
    }
    return lookup.get(key);
}


const startDigits = sequence(9, 1);
/**
 * Thoughts:
 * Possibilietes:
 * product.length =4
 * factor.length 1&4 || 2&3
  */


const pandigitalProducts = getNumbersWithLength(4, startDigits).filter(({value, others}) => {
    return [2, 1].some(l => getNumbersWithLength(l, others).some(oneLength =>
        getNumbersWithLength(oneLength.others.length, oneLength.others).some(otherLength =>
/*
            {
            if (oneLength.value * otherLength.value == value){
                console.log(`${value} = ${oneLength.value} * ${otherLength.value}`);
                return true;
            }
        }
/*/
            oneLength.value * otherLength.value == value
//*/
        )
    ));
}).map(({value})=>value);


const result = pandigitalProducts.reduce(...sumParams);
console.log("Solution:", result);

