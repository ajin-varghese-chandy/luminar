a = 5;
b = 5;

console.log((a>b)&&(a==b));

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// OR 

console.log((a>b)||(a==b));

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// logical NOT

console.log(!true); //false
console.log(!false) //true

console.log(!1); //false
console.log(!0); // true

console.log(!"hello"); //false
console.log(!""); // true

console.log(!null); // true
console.log(!undefined); // true

// other opertors

// ternary opertor pr conditiona opertor

var n = 9;
var res = (n%2 == 0) ? "even" : "odd";

console.log(`the number is ${res}`);







