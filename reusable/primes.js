let largestPrimeList = [];
let largestNAsked = 0;

/**
 * Get All primes below n
 * @param n {number}
 * @returns {number[]} Ordered List of all primes
 */
export function eratosthenes(n) {
    if (n < largestNAsked) {
        return largestPrimeList.filter(x => x <= n);
    }
    const deleted = Array.from({length: n}, _ => false); //Max Array Size 2^32... feels bad...
    const upper = Math.ceil(Math.sqrt((n)))
    const primes = [];
    for (let i = 2; i <= upper; i++) {
        if (!deleted[i]) {
            primes.push(i);
        }
        for (let j = i * i; j < deleted.length; j += i) {
            deleted[j] = true;
        }
    }
    for (let i = upper + 1; i < n; i++) {
        if (!deleted[i]) {
            primes.push(i);
        }
    }
    largestNAsked = n;
    largestPrimeList = primes;
    return primes;
}

let primeSet=new Set();
let upTo=0;

export function isPrime(n) {
    if (n>upTo){
        upTo=Math.pow(10,Math.max(4, Math.floor(Math.log10(n))+1));
        primeSet= new Set( eratosthenes(upTo));
    }
    return primeSet.has(n);
}

/**
 * trivial way of factorization
 * @param n
 * @returns {[number, number][]} [primeFactor,amount][]
 */
export function factorization(n) {
    const result = [];
    let cur = n;
    let step = 4;
    let oldLength = 0;
    while (cur > 1) {
        const primes = eratosthenes(Math.pow(10, step));
        for (let i = oldLength; i < primes.length && cur > 1; i++) {
            if (cur % primes[i] == 0) {
                let count = 0;
                while (cur % primes[i] == 0) {
                    cur /= primes[i];
                    count++;
                }
                result.push([primes[i], count]);
            }
        }
        step++;
        oldLength = primes.length;
    }
    return result;
}

/**
 *
 * @param n {number}
 * @returns {number[]} all dividers of n
 */
export function getDividers(n) {
    const dividers = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            dividers.splice(dividers.length / 2, 0, i, n / i);
            if (i == n / i) {
                dividers.splice(dividers.length / 2, 1);
            }
        }
    }
    return dividers;
}
