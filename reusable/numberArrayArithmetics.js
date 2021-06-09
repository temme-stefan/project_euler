/**
 * @param arrays {number[][]}
 * @returns {number[]}
 */
export function addMany(...arrays) {
    const max = arrays.reduce((a, b) => Math.max(a, b.length), 0);
    arrays.forEach(a => {
        for (let i = a.length; i < max; i++) {
            a.unshift(0);
        }
    });
    let sum = [];
    for (let i = max - 1; i >= 0; i--) {
        sum.unshift(arrays.reduce((a, n) => a + (n[i] ?? 0), 0));
    }
    sum = normalizeArrayNumber(sum);
    return sum;
}

/**
 *
 * @param arr {number[]}
 * @returns {number[]}
 */
function normalizeArrayNumber(arr) {
    let carry = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        carry += arr[i];
        arr[i] = carry % 10;
        carry = Math.floor(carry / 10);
    }
    while (carry > 0) {
        arr.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return arr;
}

/**
 *
 * @param arr1 {number[]}
 * @param number {number}
 * @returns {number[]}
 */
export function multiplySkalar(arr1, number) {
    return normalizeArrayNumber(arr1.map(x => x * number));
}

/**
 *
 * @param arr1 {number[]}
 * @param arr2 {number[]}
 * @returns {number[]}
 */
export function multiply(arr1, arr2) {
    if (arr2.length > arr1.length) {
        return multiply(arr2, arr1);
    }
    return addMany(...arr2.reverse().map((x, i) => {
        const s = multiplySkalar(arr1, x);
        for (let j = 0; j < i; j++) {
            s.push(0);
        }
        return s;
    }));

}

/**
 *
 * @param n {number}
 * @returns {number[]}
 */
export function toNumberArray(n) {
    const result = normalizeArrayNumber([n]);
    return result;
}

/**
 *
 * @param arr {number[]}
 * @returns {{number}}
 */
export function toNumber(arr) {
    const result = arr.reduce((a, b) => a * 10 + b, 0);
    return result;
}

/**
 *
 * @param a {number}
 * @param b {number}
 * @return {number}
 */
export function ggT(a, b) {
    if (a == 0) {
        return Math.abs(a);
    }
    if (b == 0) {
        return Math.abs(b);
    }
    while (b != 0) {
        const h = a % b;
        a = b;
        b = h;
    }
    return Math.abs(a);


}