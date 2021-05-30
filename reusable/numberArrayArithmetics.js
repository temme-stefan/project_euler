/**
 * @param arrays {number[][]}
 * @returns {number[]}
 */
export function addMany(...arrays) {
    let carry = 0;
    const sum = [];
    const max = arrays.reduce((a, b) => Math.max(a, b.length), 0);
    arrays.forEach(a => {
        for (let i = a.length; i < max; i++) {
            a.unshift(0);
        }
    });
    for (let i = max - 1; i >= 0; i--) {
        let s = arrays.reduce((a, n) => a + (n[i] ?? 0), 0);
        s += carry % 10;
        carry = Math.floor(carry / 10);
        sum.unshift(s % 10);
        carry += Math.floor(s / 10);
    }
    while (carry > 0) {
        sum.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return sum;
}


/**
 *
 * @param n {number}
 * @returns {number[]}
 */
export function toNumberArray(n){
    const result=[];
    while (n>0){
        result.unshift(n%10);
        n=Math.floor(n/10);
    }
    return result;
}