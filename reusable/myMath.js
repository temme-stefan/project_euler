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

export function reduceSum(arr){
    return arr.reduce(...sumParams);
}

export const productParams = [(a,b)=>a*b,1];

export function reduceProduct(arr){
    return arr.reduce(...productParams);
}