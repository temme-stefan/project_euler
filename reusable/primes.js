/**
 * Get All primes below n
 * @param n {number}
 * @returns {number[]} Ordered List of all primes
 */
export function eratosthenes(n) {
    const deleted = Array.from({length: n + 1}, _ => false);
    const upper = Math.floor(Math.sqrt((n)))
    const primes = [];
    for (let i = 2; i <= upper; i++) {
        if (!deleted[i]) {
            primes.push(i);
        }
        for (let j = i * i; j < deleted.length; j += i) {
            deleted[j] = true;
        }
    }
    for (let i = upper + 1; i <= n; i++) {
        if (!deleted[i]) {
            primes.push(i);
        }
    }
    return primes;
}

/**
 * trivial way of factorization
 * @param n
 * @returns {[number, number][]} [primeFactor,amount][]
 */
export function factorization(n) {
    const result = [];
    const primes = eratosthenes(n);
    for (let cur = n, i = 0; i < primes.length && cur > 1; i++) {
        if (cur % primes[i] == 0) {
            let count = 0;
            while (cur % primes[i] == 0) {
                cur /= primes[i];
                count++;
            }
            result.push([primes[i],count]);
        }
    }
    return result;
}
