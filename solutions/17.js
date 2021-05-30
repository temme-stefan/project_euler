console.log("Number letter counts");
console.log(`If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.`);
console.log('https://projecteuler.net/problem=17\n');

const firstdigit = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fiveteen", "sixteen", "seventeen", "eightteen", "nineteen"]
const seconddigit = [, , "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"]

const getTen = (n) => {
    let s = "";
    if (n < 20) {
        s += firstdigit[n]
    } else {
        const sec = Math.floor(n / 10);
        const first = n % 10;
        s = s + (seconddigit[sec] ?? "");
        if (first > 0) {
            s = s + firstdigit[first];
        }
    }
    return s;
}

const getHundred = (n) => {
    let s = "";
    if (n > 99) {
        s = firstdigit[Math.floor(n / 100)] + " hundred "
        n = n % 100;
        if (n > 0) {
            s = s + "and ";
        }
    }
    if (n > 0) {
        s = s + getTen(n);
    }
    return s;
}

const getThousand = (n) => {
    let s = "";
    const upper = Math.floor(n / 1000);
    const lower = n % 1000;
    if (upper > 0) {
        s = getHundred(upper) + " thousand "
    }
    if (lower > 0 && n != 0) {
        s = s + getHundred(lower);
    }
    return s;
}


const to = 1000;

let sum = 0;
for (let i = 1; i <= to; i++) {
    let s = getThousand(i);
    s= s.split(/\W/).join('');
    sum+=s.length;
}


const result = sum;
console.log(`Solution: ${result}`);