for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let n = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}

let a = Number(prompt("Enter starting value:"));
let b = Number(prompt("Enter ending value:"));

let sum = 0;
for (let i = a; i <= b; i++) {
    sum += i;
}

console.log("Sum =", sum);

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let x = Number(prompt("Enter a number:"));
console.log("Square =", x * x);

let start = Number(prompt("Enter start value:"));
let end = Number(prompt("Enter end value:"));

let even = 0;
let odd = 0;

for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

console.log("Even numbers:", even);
console.log("Odd numbers:", odd);

let num = Number(prompt("Enter a number:"));
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact *= i;
}

console.log("Factorial =", fact);

let rows = Number(prompt("Enter number of rows:"));

for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
}

let s = Number(prompt("Enter start value:"));
let e = Number(prompt("Enter end value:"));

for (let num = s; num <= e; num++) {
    if (num > 1) {
        let prime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
        if (prime) console.log(num);
    }
}

let st = Number(prompt("Enter start value:"));
let en = Number(prompt("Enter end value:"));

for (let i = st; i <= en; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}