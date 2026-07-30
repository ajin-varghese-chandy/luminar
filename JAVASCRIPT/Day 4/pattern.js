let input = 4;
let i = 1;
let str = "";

while (i <= input) {
    str += input;
    console.log(str);
    i++;
}
console.log("++++++++++++++++++++++++++++++++++");

let row = 1;
let col = 1;
let str1 = "";

for (row = 1; row <= 4; row++) {
    str1 = "";

    for (col = 1; col <= 4; col++) {
        str1 += row;

    }
    console.log(str1);

}
console.log("++++++++++++++++++++++++++++++++++");

let r;
let c;
let str2 = "";
for (r = 1; r <= 4; r++) {
    str2 = "";
    for (c = 1; c <= 4; c++) {
        str2 += "#"
    }
    console.log(str2);

}

console.log("++++++++++++++++++++++++++++++++++");

for (let i = 1; i <= 4; i++) {
    let str3 = "";
    for (let j = 1; j <= i; j++) {
        str3 += "*";
    }
    console.log(str3);
}

console.log("++++++++++++++++++++++++++++++++++");

input = 123;
str = "";
while (input != 0) {
    ldigit = input % 10;
    str += ldigit;
    input = Math.floor(input / 10);
}
console.log(str);
