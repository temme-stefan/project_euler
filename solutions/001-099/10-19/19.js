
console.log("Counting Sundays");
console.log(`You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?`);
console.log('https://projecteuler.net/problem=19\n');

let count = 0;

for (let i=1901; i<=2000;i++){
    for (let j = 1;j<=12;j++){
        if ( (new Date(i,j,1)).getDay()==0){
            count++;
        }
    }
}


const result = count;
console.log(`Solution: ${result}`);