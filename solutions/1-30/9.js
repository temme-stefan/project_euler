console.log('Special Pythagorean triplet\n');
console.log(`A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

    a² + b² = c²

For example, 3² + 4² = 9 + 16 = 25 = 5².

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.`);
console.log('https://projecteuler.net/problem=9\n');

const n = 1000;
let result = null;
for (let a = 1; result == null && a < n; a++) {
    const a2 = a * a;
    for (let b = a + 1; result == null && b < n - a; b++) {
        const b2 = b * b;
        const a2b2 = a2 + b2;
        const c = n - a - b;
        const c2 = c * c;
        if (c > b && a2b2 === c2) {
            result = a * b * c;
            console.log(a, b, c);
        }

    }
}


console.log("Solution:", result);