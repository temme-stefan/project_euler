export function factorial (n){
    return Array.from({length:n},(_,i)=>i+1).reduce((p,f)=>p*f,1);
}

export function binomialCoefficient(n,k){
    return factorial(n)/factorial(k)/factorial(n-k);
}

export function numberSort(a,b){
    return Math.sign(a-b);
}

export function numberSortDescending(a,b){
    return -Math.sign(a-b);
}

export const sumParams = [(a,b)=>a+b,0];

/**
 * @param {number[]}
 * @returns {number}
 */
export function reduceSum(arr){
    return arr.reduce(...sumParams);
}

export const productParams = [(a,b)=>a*b,1];

/**
 * @param arr {number[]}
 * @returns {number}
 */
export function reduceProduct(arr){
    return arr.reduce(...productParams);
}

/**
 *
 * @param length {number}
 * @param start {number}
 * @param step {number}
 * @returns {number[]}
 */
export function sequence(length,start=0,step=1){
    return Array.from({length},(_,i)=>start+i*step);
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