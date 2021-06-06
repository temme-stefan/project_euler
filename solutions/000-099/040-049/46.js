import {isPrime} from "../../../reusable/primes.js";

console.log("Goldbach's other conjecture");
console.log(`It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

9 = 7 + 2×1^2
15 = 7 + 2×2^2
21 = 3 + 2×3^2
25 = 7 + 2×3^2
27 = 19 + 2×2^2
33 = 31 + 2×1^2

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?`);
console.log("https://projecteuler.net/problem=46");

let result = null;
outer: for (let i = 3;result==null;i+=2){
    if (!isPrime(i)){
        for (let k=1;2*k*k<i;k++){
            if (isPrime(i-2*k*k)){
                continue outer;
            }
        }
        result=i;
    }

}
console.log("Solution: ",result);
