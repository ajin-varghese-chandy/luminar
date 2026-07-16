/// datatypes
function divider() {
    console.log('=====================================================================================')
}
// 1 string example

var name = "ajin";
var name1 = 'arumn'

console.log(
    `emp are ${name} & ${name1}`
);

console.log(name, name1)

divider();
// 2 Number 
var n1 = 2;
var n2 = 3.45;

console.log(n1, n2)

divider();
// 3 Boolean

const ab = true;
const bc = false;
console.log(ab);
console.log(bc)

// undefined
divider();
let fname;
console.log(fname);

let number = null;
console.log(number);

divider()
//  object example

var student = {
    name: "Arun",
    lname: null,
    age: 34,
    res: true,
    class: "tenth"
}

console.log(student);

console.log(`my name is ${student.name}`);

console.log(`im ${student.age} years old`);

// Array
divider();

var arr = [23, "amal", true, null]
console.log(arr);



console.log("name is " + arr[1])

divider();
// function

function sum(a, b) {
    return a + b;
}

console.log(sum(10, 30)); // function calling


// typeof
divider()

let data = 1212;
let d2 = "kdad";
const c1 = true;

console.log(typeof (data))

console.log(typeof (d2))

console.log(typeof (c1))

divider()

// type conversions
// implicit - method automatically by JS

let a = "5";
let b = 0;
console.log(a);
console.log(typeof (a));
console.log(a + b);

divider()

// explict - converted by manually

let c = Number(a);
console.log(typeof (a));
console.log(typeof (c));

console.log(c + b);

divider()

// using + opertor
// concatination

var cmpName = "Techno"
var place = "ktm"

console.log("company name is " + cmpName + "place is " + place);
console.log("company name is " , cmpName , "place is" , place);
console.log(`company name is  ${cmpName} place is ${place}`);
