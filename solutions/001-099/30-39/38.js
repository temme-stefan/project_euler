
console.log("Pandigital multiples");
console.log(`Take the number 192 and multiply it by each of 1, 2, and 3:

192 × 1 = 192
192 × 2 = 384
192 × 3 = 576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?`);
console.log('https://projecteuler.net/problem=38\n');

console.log("\nSolution from Whiteboard");
console.log(`Using the example, and knowing we only need to find the biggest we can quickly see some results:
- the starting number n should start with 9
- the length of the starting number n should be 4, and the result will be of n and (1,2) (each produkt with 2,3,4,5 will have one more digit, 2+3+3<9<2+3+3+3, 3+4<9<3+4+4, 4+5=9)
- thus we have an eqitation like 9___x2=1____
- no carry allowed (cause 9 already used) goes to 9___x2=18___
- Possibilties can be reduced to:
9 _ _ _ x2= 1 8 _ _ _
  2 2 2         4 2 2
  3 3 3         5 3 4
    6 6         6 4 6
    7 7         7 5
                  6
                  7 
- deep look at 5: its only righthanded allowed and the place of a 5 reduces the possibilities:
 ... _  _  ... x2= ... 5  _  ...
     i i-1             i i-1
     2  6                 2
     7  7                 3
                          4
- each of the 5 placements leads to exactly one solution:
9273 x2= 18546 
and
9327 x2= 18654

Thus the Solution is:
932718654
`);
