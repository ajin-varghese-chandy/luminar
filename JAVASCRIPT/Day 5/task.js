// 1 GCD/HCF of Two Numbers

let n1 = 12;
let n2 = 36;
let hcf = 1;

for (let i = 1; i <= n1 && i <= n2; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
        hcf = i;
    }
}

console.log("HCF =", hcf);

// 2 Pattern Using Nested Loop

let num = 153;
let temp = num;
let sum = 0;

while (temp > 0) {
    let rem = temp % 10;
    sum += rem * rem * rem;
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
}

// 3 Full Pyramid Pattern

for (let i = 1; i <= 4; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += i;
    }
    console.log(pattern);
}

// 4 

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }

    console.log(pattern);
}