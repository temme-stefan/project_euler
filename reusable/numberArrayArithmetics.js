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

export function multiplySkalar(arr1, number) {
    return normalizeArrayNumber(arr1.map(x => x * number));
}

export function multiply(arr1, arr2) {
    if (arr2.length > arr1.length) {
        return multiply(arr2, arr1);
    }
    return addMany(arr2.reverse().map((x, i) => {
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