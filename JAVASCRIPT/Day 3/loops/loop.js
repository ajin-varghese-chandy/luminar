// for loop 
var limit = 5;

for (i = 1; i <= limit; i++) {
    console.log(i);

}

// print text 20 times

for (i = 1; i <= 20; i++) {
    console.log(i + " messssdadasdad");

}

let sum = 0;
for (i = 1; i <= 100; i++) {
    sum += i;
}

console.log("sum of 100 numbers " + sum);


// the for .. in loop is used to iterate over the student object and print all its properties

// the  object key is assigned to the variable key

// student[key] is used to access the value of key.


const student = {
    sname: 'Meowww',
    class: 5,
    age: 3
}

console.log(student);

console.log(student['sname']);

for (let i in student) {
    console.log(`${i} -> ${student[i]}`);

}


// array 

const students = ['dads', 'ttasd', 'ffgsdf'];

for (let s of students) {
    console.log(s);

}

// string
const string = "code";

for (let s of string) {
    console.log(s);
}

var l = 1;
var k = 5;

while (l <= k) {
    console.log(l);
    l += 1;
}

let n = 1;

while (n < 10) {
    console.log(n)
    n += 2;
}

// factorial
console.log("++++++++++++++++++++++++++++");

n=4;
let fact = 1;
while(n>0) {
    fact*=n;
    n--;
}
console.log(fact);

// program to display 1 to 5


let y = 1;
const b = 5;

do {
    console.log(y);
    y++;
    
}while (y <= b);
